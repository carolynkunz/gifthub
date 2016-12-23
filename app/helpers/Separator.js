import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/appStyle';

export default class Separator extends Component {
  render() {
    return (
      <View style={styles.separator} />
    )
  }
};


module.exports = Separator;
