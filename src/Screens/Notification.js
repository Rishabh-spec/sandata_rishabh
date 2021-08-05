/*
* Product confirmation screen. Import all the dependencies for this screen.
* */
import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';

const Notification = (props) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notification Screen</Text>
            </View>
        </SafeAreaView>
    );
}

export default Notification;
