import React, { Component } from 'react';
import { Image, InteractionManager, Modal, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Recipient from './Recipient';
import ActionButton from 'react-native-action-button';
import NewRecipient from './NewRecipient';
import Separator from '../helpers/Separator';
import api from '../utils/api';

import styles from '../styles/appStyle';


export default class RecipientsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.id,
      userInfo: '',
      recipientInfo: this.props.userRecipients,
      isLoggedin: true,
      isLoading: false,
      error: false
    }
  }

  handleSubmit(id) {
    api.getRecipientsById(id)
      .then((res) => {
        if(res === 'Not Found') {
          this.setState({
            error: 'Recipient not found',
            isLoading: false
          })
        } else {
          // console.log(res);
          this.setState({
            userInfo: res
          })
          this.props.navigator.push({
            title: res.first_name || "Recipient Profile",
            component: Recipient,
            passProps: {userInfo: this.state.userInfo},
            isLoading: true,
            isLoggedin: this.state.isLoggedin

          });
          InteractionManager.runAfterInteractions(() => {
            this.setState({
              isLoading: false,
              error: false,
              recipientFirstName: ''
            })
          })
        }
    });
  }

  handleSubmitNewRecipient() {
    this.props.navigator.push({
      title: "Recipient Profile",
      component: NewRecipient,
      passProps: this.props.userInfo,
      isLoading: true
    });
  }


  render() {
    let recipientNames = this.state.recipientInfo.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.profileRowContainer}>
            <TouchableHighlight
              onPress={() => this.handleSubmit(item.id) }
              underlayColor="white"
              >
            <Text style={styles.profileRowContent}> {item.first_name + ' ' + item.last_name} </Text>
            </TouchableHighlight>
            {/* <ActionButton
              buttonColor="rgba(231,76,60,1)"
              onPress={this.handleSubmit.bind(this)}
            /> */}
          </View>
          <Separator />
        </View>
      )
    });

    return (
      <ScrollView style={styles.container}>
        <Text>This is the Recipient Dashboard</Text>
        {recipientNames}

        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmitNewRecipient.bind(this)}
            underlayColor="white"
            >
            <Text style={styles.buttonText}> Create New Recipient </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
};


module.exports = RecipientsDashboard;
