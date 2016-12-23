import React, { Component } from 'react';
import { ActivityIndicator, InteractionManager, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import styles from '../styles/appStyle';
import api from '../utils/api';
import Dashboard from './Dashboard';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      first_name: event.nativeEvent.text
    });
  }

  handleSubmit() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        isLoading: true
      })
    });

  api.getUsers();

  api.getRecipients();

  // api.getUsersByUsername(this.state.username);

  api.getRecipientsByFirstname(this.state.first_name)
    .then((res) => {
      if(res === 'Not Found') {
        this.setState({
          error: 'Recipient not found',
          isLoading: false
        })
      } else {
        this.props.navigator.push({
          // title: res.first_name || "Select an Option",
          component: Dashboard,
          passProps: {userInfo: res}
        });
        InteractionManager.runAfterInteractions(() => {
          this.setState({
            isLoading: false,
            error: false,
            first_name: ''
          })
        })
      }
  });

}

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Find Recipient</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.first_name}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white"
          >
          <Text style={styles.buttonText}> SUBMIT </Text>
        </TouchableHighlight>
        {/* <ActivityIndicator
          animating={this.state.isLoading}
          size='large'></ActivityIndicator> */}
      </View>
    )
  }
};

module.exports = Main;
