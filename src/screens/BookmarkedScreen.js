import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { DATA } from "../data";
import { Post } from "../components/Post";
import AppHeaderIcon from "../components/AppHeaderIcon";
import PostList from "../components/PostList";

const BookmarkedScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        });
    };

    return (
        <PostList
            data={DATA.filter(post => post.booked)}
            onOpen={openPostHandler}
        />
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

export default BookmarkedScreen;
