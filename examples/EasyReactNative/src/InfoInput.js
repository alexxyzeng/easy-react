/**
 * Created by xiayao on 16/7/22.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import BaseComp from './BaseComp';

export default class InfoInput extends BaseComp {
    updateText(text) {
        var type = this.props.type;
        console.log('type' + type);
        this.exec('user.updateInfo', type, text);
    }
    render() {
        return (
            <View style={styles.line}>
                <Text style={styles.titleLine}>
                    {this.props.title}
                </Text>
                <View style={styles.inputLine}>
                    <TextInput
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        defaultValue={this.props.defaultValue}
                        autoFocus={this.props.focus}
                        antoCorrect={false}
                        onChange={(event) => this.updateText(
                            event.nativeEvent.text
                        )}
                        style={styles.input}
                        clearButtonMode="while-editing"
                        keyboardType={this.props.keyboardType} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'column',
        //height: 90,
        justifyContent: 'space-around',
        marginTop: 10,
        borderColor: '#CCC',
        borderWidth: 1,
        height: 100,
        alignItems: 'flex-start'
    },
    titleLine: {
        width: 350,
        height: 30,
        textAlignVertical: 'center',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCC',
        paddingLeft: 12,
        paddingTop: 6,
        backgroundColor: '#F6F7F8',
    },
    inputLine: {
        width: 350,
        height: 60,
        backgroundColor: '#FFF',
        padding: 5
    },
    input: {
        flex: 1,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#939393',
        backgroundColor: '#FFF',
        margin: 5,
        paddingLeft: 10
    }
});