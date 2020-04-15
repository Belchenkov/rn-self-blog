import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const PostScreen = () => {
    return (
        <View style={styles.center}>
            <Text>PostScreen</Text>
        </View>
    );
};

PostScreen.navigationOptions = {
    headerTitle: 'Новость 1'
};


const styles = StyleSheet.create({
   center: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   }
});

export default PostScreen;
