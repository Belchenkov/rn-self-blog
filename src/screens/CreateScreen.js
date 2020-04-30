import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import AppHeaderIcon from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { addPost } from "../store/actions/post";
import { PhotoPicker } from "../components/PhotoPicker";

const CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const imgRef = useRef();

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text,
            img: imgRef.current,
            booked: false
        };

        dispatch(addPost(post));
        navigation.navigate('Main');
    };

    const photoPickHandler = uri => {
        imgRef.current = uri;
    };

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Создать пост</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Введите текст ..."
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker
                        onPick={photoPickHandler}
                    />
                    <Button
                        title="Создать"
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                        disabled={!text}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Создать пост',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Toggle Drawer"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    )
});

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10
    },
    textArea: {
        padding: 10,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10
    }
});

export default CreateScreen;
