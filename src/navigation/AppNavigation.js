import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import { THEME } from "../theme";

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }
}, {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: THEME.MAIN_COLOR
        },
        headerTintColor: '#fff'
}
});

export const AppNavigation = createAppContainer(PostNavigator);