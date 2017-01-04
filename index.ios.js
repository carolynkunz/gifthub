/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS, StyleSheet, Text, View} from 'react-native';
import Dashboard from './app/components/Dashboard';
import Main from './app/components/Main';
import styles from './app/styles/appStyle';


export default class gifthub extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GiftHub',
          component: Main
        }}
      />
    );
  }
}

AppRegistry.registerComponent('gifthub', () => gifthub);
