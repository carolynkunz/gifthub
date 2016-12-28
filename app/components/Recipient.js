import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../styles/appStyle';
// import Badge from './Badge';
import Separator from '../helpers/Separator';



export default class Recipient extends Component {
  getRowTitle(recipient, item) {
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  render() {
    console.log(this.props);
    let userInfo = this.props.userInfo;
    let topicArr = ['firstName', 'lastName', 'addressLineOne', 'addressLineTwo',
     'addressCity', 'addressState', 'addressZip', 'birthday', 'note'];

    let list = topicArr.map((item, index) => {
      if(!userInfo[item]){
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
      </ScrollView>
    )
  }
};

module.exports = Recipient;
