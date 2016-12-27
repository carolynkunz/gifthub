import React, { Component } from 'react';
import { ActivityIndicator, AlertIOS, Image, InteractionManager, TouchableHighlight, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../styles/appStyle';
import api from '../utils/api';
import Dashboard from './Dashboard';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      error: false
    }
  }

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
    let user = {username: this.state.username, password: this.state.password};
    console.log(user);

    let url = 'http://localhost:8000/api/token';
    let headers = new Headers();
    let myInit = {
      method: "POST",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };

    let res=
      fetch(url, myInit)
        .then((res) => res.json())
        .then((resData) => {
          console.log('resData: ', resData);
          if(resData === 'Bad username or password') {
            console.log(resData);
            return resData;
          // } else if (error === 'Password must not be blank') {
          //   return error;
          // } else if (error === 'Bad username or password') {
          //   return error;
          } else {
            this.props.navigator.push({
              // title: username || "Dashboard",
              component: Dashboard,
              passProps: {username: this.state.username}
            });
          }
        })



      InteractionManager.runAfterInteractions(() => {
        this.setState({
          username: '',
          password: ''
        })
      })
  }

  render() {
    return (
      <View  style={styles.loginContainer}>
        <View>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Username"
            style={styles.loginTextInput}
            value={this.state.username}
            onChange={this.handleChangeUsername.bind(this)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Password"
            style={styles.loginTextInput}
            secureTextEntry={true}
            value={this.state.password}
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
