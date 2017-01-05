import React, { Component } from 'react';
import { ActivityIndicator, InteractionManager, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import styles from '../styles/appStyle';
import api from '../utils/api';
import Login from './Login';
import Signup from './Signup';



export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false
    }
  }

  goToLogin() {
    this.props.navigator.push({
      component: Login,
      title: 'Login',
    });
  }

  goToSignup() {
    this.props.navigator.push({
      component: Signup,
      title: 'Sign Up',
      passProps: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      }
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>GiftHub</Text>
        <TouchableHighlight
          style={styles.mainButton}
          onPress={this.goToLogin.bind(this)}
          underlayColor="white"
          >
          <Text style={styles.mainButtonText}> LOGIN </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.mainButton}
          onPress={this.goToSignup.bind(this)}
          underlayColor="white"
          >
          <Text style={styles.mainButtonText}> SIGN UP </Text>
        </TouchableHighlight>
      </View>
    )
  }
};
