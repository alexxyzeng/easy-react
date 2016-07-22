/**
 * Created by xiayao on 16/7/22.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import BaseComp from './BaseComp';
import InfoInput from './InfoInput';

export default class InputBox extends BaseComp {
    componentDidMount() {

    }
    render() {
        return (
            <View style={styles.inputBox}>
                <InfoInput
                    title="姓名"
                    type="name"
                    placeholder="请输入您的姓名"
                    defaultValue="Alex"
                    focus={true} >
                </InfoInput>
                <InfoInput
                    title="性别"
                    type="gender"
                    placeholder="请输入男/女"
                    defaultValue="男"
                    focus={false} >
                </InfoInput>
                <InfoInput
                    title="年龄"
                    type="age"
                    placeholder="请输入年龄"
                    defaultValue="28"
                    focus={false}
                    keyboardType="numeric" >
                </InfoInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        //marginTop: 10
    }
});