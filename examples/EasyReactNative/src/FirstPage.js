/**
 * Created by xiayao on 16/7/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

//import BaseComp from './baseComp';
import InputBox from './InputBox';
import SecondPage from './SecondPage';

export default class FirstPage extends Component {
    _pressButton() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'SecondPage',
                component: SecondPage
            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text style={styles.titleText}>用户信息输入</Text>
                </View>
                <InputBox></InputBox>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._pressButton.bind(this)}>
                    <Text style={styles.buttonText}>确定</Text>
                </TouchableOpacity>
            </View>
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
        width: 600,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#CCC',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
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