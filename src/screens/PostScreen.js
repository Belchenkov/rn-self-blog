import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Button,
    ScrollView,
    Alert
} from "react-native";

import { DATA } from "../data";
import {THEME} from "../theme";

const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId');
    const post = DATA.find(p => p.id === postId);

    const removeHandler = () => {
        Alert.alert(
          'Удаление поста',
          'Вы действительно хотите удалить пост?',
            [
                {
                    text: 'Отмена',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: () => {}
                }
            ]
        );
    };

    return (
        <ScrollView style={styles.center}>
            <Image
                source={{uri: post.img}}
                style={styles.image}
            />
            <View style={styles.textWrap}>
                <Text style={styles.title}>{ post.text }</Text>
            </View>
            <Button
                title="Удалить"
                color={THEME.DANGER_COLOR}
                onPress={removeHandler}
            />
        </ScrollView>
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
   image: {
       width: '100%',
       height: 200
   },
   textWrap: {
       padding: 10
   },
   title: {
       fontFamily: 'open-regular'
   }
});

export default PostScreen;
