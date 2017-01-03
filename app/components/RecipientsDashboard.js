import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Separator from '../helpers/Separator';
import styles from '../styles/appStyle';


export default class RecipientsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.id,
      recipientInfo: this.props.userRecipients,
      isLoggedin: false,
      isLoading: false,
      error: false
    }
  }


  render() {
    console.log(this.props.userRecipients);

    let recipientNames = this.state.recipientInfo.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.profileRowContainer}>
            <Text style={styles.profileRowContent}> {item.first_name + ' ' + item.last_name} </Text>
          </View>
          <Separator />
        </View>
      )
    });

console.log(recipientNames);


    return (
      <ScrollView style={styles.container}>
        <Text>This is the Recipient Dashboard</Text>
        {recipientNames}
      </ScrollView>
    )
  }
};


module.exports = RecipientsDashboard;
