/*
* Home Screen Of the app . Import all the dependencies for this screen.
* */
import React, { Component, Fragment, useEffect, useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground, StatusBar, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import Constants from '../Constants';
import { GetAction, PostDataAction, ApiCalled, SaveData } from '../Actions';
import Header from '../CommonComponent/Header';
import { getAPI } from '../Utils/Api';
import moment from 'moment';

const Home = (props) => {
    const [data, setData] = useState({})

    useEffect(() => {
        getAPI('https://tempapi.proj.me/api/sePJfHvoR').then((response) => {
            console.log('response', response)
            setData(response[0])
        }).catch((error) => {
            console.log('Error', error)
        })
    }, [])

    const renderPost = ({ item, index }) => {
        return <View style={{ borderBottomColor: Constants.Colors.GRAY, borderBottomWidth: 0.5, paddingBottom: 10, marginTop:10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={Constants.Images.DUMMY} style={{ width: 50, height: 50 }} />
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ fontSize: 20, color: Constants.Colors.GRAY }}>{item.name}</Text>
                        <Text style={{ fontSize: 15, color: Constants.Colors.RED }}>{item.username}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 15, color: Constants.Colors.GRAY }}>{moment(item.post_time).fromNow()}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Constants.Images.HEART} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 20, color: Constants.Colors.GRAY }}> {item.likes}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <Image source={Constants.Images.COMMENT} style={{ width: 20, height: 20 }} />
                            <Text style={{ fontSize: 20, color: Constants.Colors.GRAY }}> {item.comments}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Image source={{ uri: item.url }} style={{ height: 100, marginVertical: 10 }} />
            <Text style={{ fontSize: 15, color: Constants.Colors.GRAY }}>{item.post_text}</Text>
        </View>
    }

    return (
        <Fragment>
            <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'} />
            {
                Object.keys(data).length > 0 ?
                    <>
                        <ImageBackground source={{ uri: data.profile.background }} style={{ width: '100%', height: 200 }}>
                            <SafeAreaView>
                                <Header navigation={props.navigation} />
                            </SafeAreaView >
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Edit Profile</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                        <View style={{ backgroundColor: Constants.Colors.WHITE, paddingTop: 10 }}>
                            <Image source={Constants.Images.PROFILE} style={styles.profileImage} />
                            <View style={{ marginLeft: 150 }}>
                                <Text style={{ fontSize: 18, color: Constants.Colors.GRAY }}>User Name: {data.profile.username}</Text>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, color: Constants.Colors.GRAY }}>{data.profile.post}</Text>
                                        <Text style={{ fontSize: 12, color: Constants.Colors.GRAY }}>posts</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                        <Text style={{ fontSize: 20, color: Constants.Colors.GRAY }}>{data.profile.followers}</Text>
                                        <Text style={{ fontSize: 12, color: Constants.Colors.GRAY }}>followers</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, color: Constants.Colors.GRAY }}>{data.profile.following}</Text>
                                        <Text style={{ fontSize: 12, color: Constants.Colors.GRAY }}>following</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: Constants.Colors.WHITE, paddingHorizontal: 10 }}>
                            <View style={styles.seperatorView}>
                                <Image source={Constants.Images.USER} style={{ tintColor: Constants.Colors.RED }} />
                                <Image source={Constants.Images.USER} />
                                <Image source={Constants.Images.USER} />
                            </View>
                            <FlatList
                                data={data.posts}
                                renderItem={renderPost}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </ScrollView>
                    </> : <ActivityIndicator size="large" color="#00ff00" />
            }
        </Fragment>
    );
}

//Define internal css
const styles = StyleSheet.create({
    button: {
        padding: 20,
        borderRadius: 6,
        backgroundColor: Constants.Colors.BUTTON,
        position: 'absolute',
        right: 10,
        bottom: 10
    },
    buttonText: {
        ...Constants.Styles.cardText,

    },
    profileImage: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderWidth: 5,
        borderColor: Constants.Colors.WHITE,
        borderRadius: 60,
        position: 'absolute',
        top: -60,
        left: 20
    },
    seperatorView: {
        marginVertical: 20,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderBottomColor: Constants.Colors.GRAY,
        borderTopColor: Constants.Colors.GRAY,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
});

export default Home;
