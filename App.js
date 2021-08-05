// App.js is the root file of the application. In this file, we create app container by combining all types of navigator which are using in this app. 


//Import React Native component.
import React, { Component } from 'react';
import { Platform, Easing, Image, Alert } from 'react-native';

//Import react-navigation and its navigator.
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomDrawerContent from './src/CommonComponent/sidemenu';

//Import Screens which are usng in the navigation.
import Home from './src/Screens/Home';
import Notification from './src//Screens/Notification';
import Search from './src//Screens/Search';
import Download from './src//Screens/Download';
import Constants from './src/Constants';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="StoreScreen"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff',
          padding: 5,
          borderTopWidth: 1,
          paddingTop: 4,
          borderTopColor: Constants.Colors.GRAY1,
        },
        showLabel: false,
      }}>
      <Tab.Screen name="Home"
        options={{
          headerShown:false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={Constants.Images.HOME_ICON}
              style={{ width: size, height: size, resizeMode: "contain", tintColor: focused ? 'tomato' : 'gray' }}
            />
          ),
        }}
        component={Home} />
      <Tab.Screen name="Notification"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={Constants.Images.NOTIFICATION}
              style={{ width: size, height: size, resizeMode: "contain", tintColor: focused ? 'tomato' : 'gray' }}
            />
          ),
        }}
        component={Notification} />
      <Tab.Screen name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={Constants.Images.SEARCH_ICON}
              style={{ width: size, height: size, resizeMode: "contain", tintColor: focused ? 'tomato' : 'gray' }}
            />
          ),
        }}
        component={Search} />
      <Tab.Screen name="Download"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={Constants.Images.NATIONALITY}
              style={{ width: size, height: size, resizeMode: "contain", tintColor: focused ? 'tomato' : 'gray' }}
            />
          ),
        }}
        component={Download} />
    </Tab.Navigator>
  )
}

const DrawerNav = () => {
  return (
    <Drawer.Navigator 
    screenOptions={{
      headerShown:false,
    }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
    </Drawer.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

export default App

