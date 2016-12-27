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
          this.props.navigator.push({
            // title: username || "Dashboard",
            component: Dashboard,
            passProps: {username: this.state.username}
          })
        })
        .catch((err) => {
          console.error(err);
        });

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
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
        </View>
        <View>
          <TextInput
            placeholder="Password"
            style={styles.loginTextInput}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
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
