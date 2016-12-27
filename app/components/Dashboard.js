import { ActivityIndicator, Image, InteractionManager, TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Component } from 'react';
import api from '../utils/api';
import Recipient from './Recipient';
// import Notes from './Notes';
// import Repositories from './Repositories';
import styles from '../styles/appStyle';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipientFirstName: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      recipientFirstName: event.nativeEvent.text
    });
  }

  handleSubmit() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        isLoading: true
      })
    });

    api.getRecipientsByFirstname(this.state.recipientFirstName)
      .then((res) => {
        if(res === 'Not Found') {
          this.setState({
            error: 'Recipient not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.first_name || "Recipient Profile",
            component: Recipient,
            passProps: {userInfo: res}
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

  render() {
    return (
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.title}>Find Recipient</Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.recipientFirstName}
            onChange={this.handleChange.bind(this)}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white"
            >
            <Text style={styles.buttonText}> SUBMIT </Text>
          </TouchableHighlight>
          <ActivityIndicator
            animating={this.state.isLoading}
            size='large'></ActivityIndicator>
        </View>
      </View>
    )
  }
};

module.exports = Dashboard;
