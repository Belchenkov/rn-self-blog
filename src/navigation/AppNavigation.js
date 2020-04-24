import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import { THEME } from "../theme";
import BookmarkedScreen from "../screens/BookmarkedScreen";
import AboutScreen from "../screens/AboutScreen";
import CreateScreen from "../screens/CreateScreen";

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
            tabBarLabel: 'Все',
            tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor} />
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarLabel: 'Избранное',
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

const AboutNavigator = createStackNavigator({
    About: AboutScreen
}, navigatorOptions);

const CreateNavigator = createStackNavigator({
    Create: CreateScreen
}, navigatorOptions);

const MainNavigator = createDrawerNavigator({
   PostTabs: {
       screen: BottomNavigator,
       navigationOptions: {
           drawerLabel: 'Главная',
           drawerIcon: <Ionicons size={25} name='ios-list' />
       }
   },
   About: {
       screen: AboutNavigator,
       navigationOptions: {
           drawerLabel: 'О приложении',
           drawerIcon: <Ionicons size={25} name='ios-help-circle-outline' />

       }
   },
   Create: {
       screen: CreateNavigator,
       navigationOptions: {
           drawerLabel: 'Создать пост',
           drawerIcon: <Ionicons size={25} name='ios-create' />
       }
   }
}, {
    contentOptions: {
        activeTintColor: THEME.MAIN_COLOR,
            labelStyle: {
            fontFamily: 'open-regular'
        }
    }
}
);

export const AppNavigation = createAppContainer(MainNavigator);