import React, { Component } from 'react';
import { ActivityIndicator, Image, InteractionManager, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
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
      // <Image source={require('../images/confetti.png')} style={styles.mainContainer}>
      <Image source={require('../images/bunting.jpg')} style={styles.mainContainer}>

          <Text style={styles.mainTitle}>GiftHub</Text>

          <TouchableHighlight
            style={styles.signupButton}
            onPress={this.goToSignup.bind(this)}
            underlayColor="white"
            >
            <Text style={styles.mainButtonText}> SIGN UP </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.loginButton}
            onPress={this.goToLogin.bind(this)}
            underlayColor="white"
            >
            <Text style={styles.mainButtonText}> LOGIN </Text>
          </TouchableHighlight>

      </Image>
    )
  }
};
