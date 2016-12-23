import { Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import api from '../utils/api';
import Recipient from './Recipient';
// import Notes from './Notes';
// import Repositories from './Repositories';
import styles from '../styles/appStyle';



export default class Dashboard extends Component {
  makeBackground(btn) {
    const obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0){
      obj.backgroundColor = "#CAE5FF"
    } else if (btn === 1) {
      obj.backgroundColor = "#6D9DC5"
    } else {
      obj.backgroundColor = "#8EA4D2"
    }

    return obj;
  }

  goToRecipient() {
    this.props.navigator.push({
      component: Recipient,
      title: 'Recipient Profile',
      passProps: {userInfo: this.props.userInfo}
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToRecipient.bind(this)}
          underlayColor="#F1E4E8">
          <Text style={styles.buttonText}> View Recipient </Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Dashboard;
