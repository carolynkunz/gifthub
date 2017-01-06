import React, { Component } from 'react';
import { Image, InteractionManager, Modal, Navigator, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Recipient from './Recipient';
import ActionButton from 'react-native-action-button';
import Login from './Login';

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

    console.log(this.state);
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
          this.setState({
            userInfo: res
          })
          this.props.navigator.push({
            title: "Recipient Profile",
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

  handleRecipientAdded(newRecipient) {
    console.log(this.state.recipientInfo.concat(newRecipient));
    this.setState({recipientInfo: this.state.recipientInfo.concat(newRecipient)})
  }

  handleSubmitNewRecipient() {
    this.props.navigator.push({
      title: "New Recipient",
      component: NewRecipient,
      passProps: {
        userInfo: this.props.userInfo,
        token: this.props.token,
        onRecipientAdded: this.handleRecipientAdded.bind(this)
      },
      isLoading: true
    });
  }

  handleSubmitLogout() {
      let headers = new Headers();
      let myInit =
        { method: 'DELETE',
          headers: headers
        };

      headers.append("Accept", "application/json");

      fetch('https://carolynkunz-gifthub.herokuapp.com/api/token', myInit)
        .then((res) => {
          this.props.checkIsLoggedIn();
        })
        .catch((err) => {
          console.error(err);
        })


    InteractionManager.runAfterInteractions(() => {
      this.setState({
        isLoggedin: false
      })
    });
    this.props.navigator.push({
      component: Login,
      isLoggedin: false,
      isLoading: true
    });
  }


  render() {
    // console.log('RecipientsDashboard Props: ', this.props);
    let recipientNames = this.state.recipientInfo.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.profileRowContainer}>
            <TouchableHighlight
              onPress={() => this.handleSubmit(item.id) }
              underlayColor="white"
              >
            <Text style={styles.profileRowTitle}> {item.firstName + ' ' + item.lastName} </Text>
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
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>

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

        <Navigator
          renderScene={(route, navigator) =>
            <TouchableHighlight
              style={styles.button}
              onPress={this.handleSubmitLogout.bind(this)}
              underlayColor="white"
              >
                <Text style={styles.buttonText}> LOG OUT </Text>
              </TouchableHighlight>
          }
        />
      </ScrollView>
    )
  }
};


module.exports = RecipientsDashboard;
