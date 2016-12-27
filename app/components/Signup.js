import React, { Component } from 'react';
import { ActivityIndicator, AlertIOS, Image, InteractionManager, TouchableHighlight, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../styles/appStyle';
import api from '../utils/api';
import Dashboard from './Dashboard';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      isLoading: false,
      error: false
    }
  }

  handleSubmit() {
    let userSignup = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    let url = 'http://localhost:8000/api/users';
    let headers = new Headers();
    let myInit = {
      method: "POST",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userSignup)
    };

    fetch(url, myInit)
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
        return res.text();
      })
      .then((resData) => {
        console.log('userSignup: ', userSignup);
        console.log('resData: ', resData);
        if (resData === 'First Name must not be blank') {
          AlertIOS.alert(
            resData
          )
        } else if (resData === 'First Name must not be blank') {
          AlertIOS.alert(
            resData
          )
        } else if (resData === 'Email must not be blank') {
          AlertIOS.alert(
            resData
          )
        } else if (resData === 'Username must not be blank') {
          AlertIOS.alert(
            resData
          )
        } else if (resData === 'Password must be at least 8 characters long') {
          AlertIOS.alert(
            resData
          )
        } else if (resData === 'Username already exists') {
          AlertIOS.alert(
            resData
          )
        } else {
          this.props.navigator.push({
            // title: username || "Dashboard",
            component: Dashboard,
            passProps: {
              userSignup: this.state.userSignup,
              userInfo: resData
            }
          })
        }
      })
      .catch((err) => {
        console.error(err);
      });

    InteractionManager.runAfterInteractions(() => {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
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
            autoCorrect={false}
            placeholder="First Name"
            style={styles.loginTextInput}
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
          />
        </View>
        <View>
          <TextInput
            autoCorrect={false}
            placeholder="Last Name"
            style={styles.loginTextInput}
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
          />
        </View>
        <View>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            style={styles.loginTextInput}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
        </View>
        <View>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="User Name"
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


module.exports = Signup;
