import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import { THEME } from "../theme";
import BookmarkedScreen from "../screens/BookmarkedScreen";

const navigatorOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: THEME.MAIN_COLOR
        },
        headerTintColor: '#fff'
    }
};

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: PostScreen
}, navigatorOptions);

const BookedNavigator = createStackNavigator({
    Booked: BookmarkedScreen,
    Post: PostScreen
}, navigatorOptions);

const bottomTabsConfig = {
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarOptions: 'Все',
            tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor} />
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarOptions: 'Избранное',
            tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor} />
        }
    }
};

const BottomNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeTintColor: '#fff',
        shifting: true,
        barStyle: {
            backgroundColor: THEME.MAIN_COLOR
        }
    })
    : createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: {
            activeTintColor: THEME.MAIN_COLOR
        }
});

export const AppNavigation = createAppContainer(BottomNavigator);