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
      isLoggedin: false,
      isLoading: false,
      error: false
    }
  }

  // checkIsLoggedIn() {
  //   let url = 'http://localhost:8000/api/token';
  //   let headers = new Headers();
  //   let myInit = {
  //     method: "GET",
  //     headers: {
  //       'Accept' : 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(userLogin)
  //   };
  //
  //   fetch(url, myInit)
  //     .then((res) => {
  //       if(res.ok) {
  //         return res.json()
  //       }
  //       return res.text();
  //     })
  //     .then((resData) => {
  //       console.log(resData);
  //       this.setState({ isLoggedin: resData });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  goToLogin() {
    this.props.navigator.push({
      component: Login,
      title: 'Login',
      // passProps: {
      //   checkIsLoggedIn: this.checkIsLoggedIn,
      //   isLoggedin: this.state.isLoggedin
      // }
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
        isLoggedin: this.state.isLoggedin}

    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>GiftHub</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.goToLogin.bind(this)}
          underlayColor="white"
          >
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.goToSignup.bind(this)}
          underlayColor="white"
          >
          <Text style={styles.buttonText}> SIGN UP </Text>
        </TouchableHighlight>
      </View>
    )
  }
};
