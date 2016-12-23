import React, { Component } from 'react';
import { ActivityIndicator, Image, InteractionManager, TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../styles/appStyle';

export default class Login extends Component {
  // api.userSignin() {
  //
  // }

  handleChangeUsername(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.nativeEvent.text
    });
  }

  handleSubmit() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        isLoading: true
      })
    })
  }

  render() {
    return (
      <View>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Find Recipient</Text>
          <TextInput
            defaultValue="Username"
            style={styles.loginTextInput}
            value={this.props.username}
            onChange={this.handleChangeUsername.bind(this)}
          />
          <TextInput
            defaultValue="Password"
            style={styles.loginTextInput}
            value={this.props.password}
            onChange={this.handleChangePassword.bind(this)}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white"
            >
            <Text style={styles.buttonText}> SUBMIT </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
};


module.exports = Login;
