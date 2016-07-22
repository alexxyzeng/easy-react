/**
 * Created by xiayao on 16/7/22.
 */
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import BaseComp from './BaseComp.js';

export default class SecondPage extends BaseComp {
    constructor(props) {
        super(props);
        this.state = { user: { name: "yonghu", gender: "男", age: "1"} };
    }
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    componentWillMount() {
        this.bindData("user", "user");
    }
    componentWillUnmount() {
        //this.unbindData("user");
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text style={styles.titleText}>查看用户信息</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoLine}>姓名: {this.state.user.name}</Text>
                    <Text style={styles.infoLine}>性别: {this.state.user.gender}</Text>
                    <Text style={styles.infoLine}>年龄: {this.state.user.age}</Text>
                    <Text></Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._pressButton.bind(this)}>
                    <Text style={styles.buttonText}>返回修改</Text>
                </TouchableOpacity>
            </View>
        )
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
    info: {
        marginTop: 20
    },
    infoLine: {
        width: 350,
        fontSize: 16,
        textAlign: 'center',
        padding: 10
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