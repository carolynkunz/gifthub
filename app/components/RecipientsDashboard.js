import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/appStyle';

export default class RecipientsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.id,
      isLoggedin: false,
      isLoading: false,
      error: false
    }
  }

// api.getUserRecipients() {
//   userId = this.state.userId;
//   console.log(res);
// }

  render() {
    console.log(this.props);
    return (
      <View style={styles.loginContainer}>
        <Text>This is the Recipient Dashboard</Text>
      </View>
    )
  }
};


module.exports = RecipientsDashboard;
