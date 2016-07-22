/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';


import Main from './src/Main.js';

class EasyReactNative extends Component {

    render() {
        return (
            <Main></Main>
        );
    }
}

AppRegistry.registerComponent('EasyReactNative', () => EasyReactNative);
