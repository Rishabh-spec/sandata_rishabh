/*
* Custom drawer navigator
* */

import React from 'react';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="Setting"
                onPress={() => console.log('press setting')}
            />
            <DrawerItem
                label="Logout"
                onPress={() => console.log('press logout')}
            />
        </DrawerContentScrollView>
    );
}


export default CustomDrawerContent;
