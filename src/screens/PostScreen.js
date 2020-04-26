import React, { useEffect, useCallback } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Button,
    ScrollView,
    Alert
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import { DATA } from "../data";
import { THEME } from "../theme";
import AppHeaderIcon from "../components/AppHeaderIcon";
import { toggleBooked } from "../store/actions/post";

const PostScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const postId = navigation.getParam('postId');
    const post = DATA.find(p => p.id === postId);

    const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId));

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(postId));
    }, [dispatch, postId]);

    useEffect(() => {
        navigation.setParams({ booked });
    }, [booked])

    useEffect(() => {
        navigation.setParams({ toggleHandler });
    }, [toggleHandler])

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
    const date = navigation.getParam('date');
    const booked = navigation.getParam('booked');
    const toggleHandler = navigation.getParam('toggleHandler');
    const iconName = booked ? 'ios-star' : 'ios-star-outline';

    return {
        headerTitle: `Новость от ${new Date(date).toLocaleDateString()}`,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title="Take photo"
                    iconName={iconName}
                    onPress={() => toggleHandler()}
                />
            </HeaderButtons>
        )
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
