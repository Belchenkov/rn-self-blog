import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { DATA } from "../data";
import { Post } from "../components/Post";
import AppHeaderIcon from "../components/AppHeaderIcon";
import MainScreen from "./MainScreen";

const BookmarkedScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        });
    };

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA.filter(post => post.booked)}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => (
                    <Post post={item} onOpen={openPostHandler} />
                )}
            />
        </View>
    );
};

BookmarkedScreen.navigationOptions = {
    headerTitle: 'Избранное',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Toggle Drawer"
                iconName="ios-menu"
                onPress={() => console.log('Press Photo')}
            />
        </HeaderButtons>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
});

export default BookmarkedScreen;
