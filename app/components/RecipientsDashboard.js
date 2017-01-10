import React, { Component } from 'react';
import { Image, InteractionManager, Modal, Navigator, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import api from '../utils/api';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './Login';

import Main from './Main';
import NewRecipient from './NewRecipient';
import NavigationBar from 'react-native-navbar';
import Recipient from './Recipient';
import Separator from '../helpers/Separator';
import styles from '../styles/recipientsDashboardStyle';


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
          console.log(res);
          this.setState({
            userInfo: res
          })
          this.props.navigator.push({
            title:this.state.userInfo.firstName + " " + this.state.userInfo.lastName,
            component: Recipient,
            passProps: {
              userInfo: this.state.userInfo,
              onRecipientAdded: this.handleRecipientAdded.bind(this),
              token: this.props.token,
            },
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
    this.setState({recipientInfo: this.state.recipientInfo.concat(newRecipient)})
  }

  handleSubmitNewRecipient() {
    this.props.navigator.push({
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
        isLoggedin: false,
        isLoading: false
      })
    });

    this.props.navigator.pop();
  }


  render() {
    console.log('RecipientsDashboard Props: ', this.props);

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
          </View>

          <Separator />

        </View>
      )
    });

    return (
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>

        <View>
          <Text style={styles.buttonText}>Recipients</Text>
          <View style={styles.titleSeparator} />
        </View>

        {recipientNames}

        <View style={{marginTop: 40}}>
          <TouchableHighlight
            style={styles.recipientButton}
            onPress={this.handleSubmitNewRecipient.bind(this)}
            underlayColor="white"
          >
            <Text style={styles.buttonText}> Add New Recipient </Text>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
            style={styles.recipientButton}
            onPress={this.handleSubmitLogout.bind(this)}
            underlayColor="white"
          >
            <Text style={styles.buttonText}> LOG OUT </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
};


module.exports = RecipientsDashboard;
