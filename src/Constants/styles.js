/*
* Common styles for the app component
* */
import { StyleSheet, PlatForm } from 'react-native';
import Colors from './Colors'
import { wp, hp } from '../Utils/responsive';

export default StyleSheet.create({
    menuCard: {
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
    },
    cardText: {
        fontSize: wp('4.2%'),
        color:Colors.WHITE
    },
    profilePic: {
        width: wp('21.33%'),
        height: wp('21.33%'),
        borderRadius: wp('11%'),
        overflow: 'hidden',
        backgroundColor: Colors.PLACEHOLDER
    },
    profilePicStyle: {
        width: wp('21.33%'),
        height: wp('21.33%'),
        borderRadius: wp('11%'),
    },
    shadowStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    seperator: {
        height: 1,
        backgroundColor: Colors.SHADOW,
        marginHorizontal:20
    },
})