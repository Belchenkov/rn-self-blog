import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

import { DATA } from "../data";
import { Post } from "../components/Post";

const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date
        });
    };

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => (
                    <Post post={item} onOpen={openPostHandler} />
                )}
            />
        </View>
    );
};

MainScreen.navigationOptions = {
    headerTitle: 'Новостной блог',
    fontFamily: 'open-regular'
};

const styles = StyleSheet.create({
    wrapper: {
       padding: 10
   },
});

export default MainScreen;
