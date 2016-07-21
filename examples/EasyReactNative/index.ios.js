/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import BaseComp from 'src/baseComp'


class EasyReactNative extends BaseComp {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageTitle}>
          <Text style={styles.titleText}>用户信息输入</Text>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.line}>
            <Text style={styles.titleLine}>
              姓名:
            </Text>
            <View style={styles.inputLine}>
              <TextInput
                  placeholder="请输入姓名"
                  defaultValue="Alex"
                  antoCorrect={false}
                  autoFocus={true}
                  onEndEditing={this.updateText}
                  style={styles.input}
                  clearButtonMode="while-editing"
                  />
            </View>
          </View>
          <View style={styles.line}>
            <Text style={styles.titleLine}>
              性别:
            </Text>
            <View style={styles.inputLine}>
              <TextInput
                  placeholder="请输入男/女"
                  defaultValue="男"
                  antoCorrect={false}
                  onEndEditing={this.updateText}
                  style={styles.input}
                  clearButtonMode="while-editing"
                  />
            </View>
          </View>
          <View style={styles.line}>
            <Text style={styles.titleLine}>
              性别:
            </Text>
            <View style={styles.inputLine}>
              <TextInput
                  placeholder="请输入年龄数字"
                  defaultValue="28"
                  antoCorrect={false}
                  onEndEditing={this.updateText}
                  style={styles.input}
                  keyboardType="numeric"
                  clearButtonMode="while-editing"
                  />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
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
    marginTop: 20
  },
  inputBox: {
    marginTop: 64
  },
  line: {
    flexDirection: 'column',
    height: 60,
    justifyContent: 'space-around',
    marginTop: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    height: 100,
    alignItems: 'flex-start'
  },
  titleLine: {
    flex: 0.4,
    width: 350,
    textAlignVertical: 'center',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 12,
    paddingTop: 10,
    backgroundColor: '#F6F7F8',
  },
  inputLine: {
    flex: 0.5,
    width: 350,
    height: 30,
    padding: 5
  },
  input: {
    flex: 1,
    height: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#939393',
    margin: 5,
    paddingLeft: 10
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 15,
    marginTop: 20,
    backgroundColor: 'green',
    justifyContent: 'center',

  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }
});

AppRegistry.registerComponent('EasyReactNative', () => EasyReactNative);
