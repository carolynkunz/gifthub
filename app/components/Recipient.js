import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles/appStyle';
import EditRecipient from './EditRecipient';
import Dashboard from './Dashboard';
import Separator from '../helpers/Separator';



export default class Recipient extends Component {

  getRowTitle(recipient, item) {
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  handleSubmit() {
    this.props.navigator.push({
      title: "Edit Recipient",
      component: EditRecipient,
      passProps: this.props.userInfo
    })
    console.log(this.props.userInfo);
  }

  render() {
    console.log(this.props);
    console.log('this.props.userInfo: ', this.props.userInfo);
    let userInfo = this.props.userInfo;
    let topicArr = ['firstName', 'lastName', 'addressLineOne', 'addressLineTwo',
     'addressCity', 'addressState', 'addressZip', 'birthday', 'note'];

    let list = topicArr.map((item, index) => {
      if(!userInfo[item]) {
        return <View key={index}/>
      } else {
        return (
          <View key={index}>
            <View style={styles.profileRowContainer}>
              <Text style={styles.profileRowTitle}> {this.getRowTitle(userInfo, item)} </Text>
              <Text style={styles.profileRowContent}> {userInfo[item]} </Text>
            </View>
            <Separator />
          </View>
        )
      }
    });
    return (
        <ScrollView style={styles.container}>
          {/* <Badge userInfo={this.props.userInfo}/> */}
          {list}
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white"
            >
              <Text style={styles.buttonText}> Edit Recipient </Text>
            </TouchableHighlight>
        </ScrollView>
    )
  }
};

module.exports = Recipient;
