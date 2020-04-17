import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId');

    return (
        <View style={styles.center}>
            <Text>{postId}</Text>
        </View>
    );
};

PostScreen.navigationOptions = ({ navigation }) => {
    const postId = navigation.getParam('postId');
    const date = navigation.getParam('date');

    return {
        headerTitle: `Новость от ${new Date(date).toLocaleDateString()}`
    }
};


const styles = StyleSheet.create({
   center: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   }
});

export default PostScreen;
