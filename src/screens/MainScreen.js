import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

const MainScreen = ({ navigation }) => {
    const goToPost = () => {
        navigation.navigate('Post');
    };

    return (
        <View style={styles.center}>
            <Text>MainScreen</Text>
            <Button title="Go to Post" onPress={goToPost}  />
        </View>
    );
};

MainScreen.navigationOptions = {
    headerTitle: 'Новостной блог'
};

const styles = StyleSheet.create({
   center: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   }
});

export default MainScreen;
