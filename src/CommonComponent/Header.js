/*
* Common header for the app
* */

// Import all the screen dependencies
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from '../Constants';
import { wp, hp } from '../Utils/responsive';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
                onPress={() => props.navigation.openDrawer()}
                style={styles.headerView}>
                <Image style={{ tintColor: Constants.Colors.WHITE }} source={Constants.Images.MENU_ICON} />
                <Text style={styles.headerText}>Profile</Text>
            </TouchableOpacity>
            <View style={[styles.headerView, { justifyContent: 'flex-end', paddingRight: 5 }]} >
                <Image style={{ tintColor: Constants.Colors.WHITE }} source={Constants.Images.SEARCH_ICON} />
            </View>
        </View >
    );
}

//Define internal css
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp('4%'),
        paddingTop:25,
        backgroundColor: 'transparent',
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    headerView: {
        // width: wp('18.66%'),
        flexDirection: 'row',
        alignItems: 'center',
    },
    textView: {
        backgroundColor: Constants.Colors.WHITE,
        borderRadius: 6,
        flex: 1,
        flexDirection: 'row'
    },
    headerText: {
        fontSize: wp('8%'),
        color: Colors.WHITE,
        marginLeft: 10
    },
    badge: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Constants.Colors.BUTTON,
        position: 'absolute',
        top: -5,
        right: -10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    badgeText: {
        color: Constants.Colors.WHITE,
    }
});

export default Header;
