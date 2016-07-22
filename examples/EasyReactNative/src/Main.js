/**
 * Created by xiayao on 16/7/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';

import BaseComp from './BaseComp';
import FirstPage from './FirstPage';
import __dc from './DataComm';
import UserAction from './action/UserAction.js';

__dc.registerAction(UserAction);

export default class Main extends BaseComp {

    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComp = FirstPage;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComp }}
                configureScene={(scene) => {
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#E9EAED',
        paddingBottom: 10,
    },
    pageTitle: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    titleText: {
        fontSize: 24,
        textAlignVertical: 'center'
    },
    button: {
        height: 30,
        width: 80,
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: 'green',
        justifyContent: 'center',

    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    }
});