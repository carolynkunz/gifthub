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
      isLoggedin: false,
      isLoading: false,
      error: false
    }
    console.log('this.state.isLoggedin: ', this.state.isLoggedin);
  }

  checkIsLoggedIn() {
    let url = 'http://localhost:8000/api/token';
    let headers = new Headers();
    let myInit = {
      method: "GET",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
    };

    fetch(url, myInit)
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
        return res.text();
      })
      .then((resData) => {
        return resData
      })
      .catch((err) => {
        console.error(err);
      });
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
          this.setState({ isLoggedin: false });

        } else if (resData === 'First Name must not be blank') {
          AlertIOS.alert(
            resData
          )
          this.setState({ isLoggedin: false });

        } else if (resData === 'Email must not be blank') {
          AlertIOS.alert(
            resData
          )
          this.setState({ isLoggedin: false });

        } else if (resData === 'Username must not be blank') {
          AlertIOS.alert(
            resData
          )
          this.setState({ isLoggedin: false });

        } else if (resData === 'Password must be at least 8 characters long') {
          AlertIOS.alert(
            resData
          )
          this.setState({ isLoggedin: false });

        } else if (resData === 'Username already exists') {
          AlertIOS.alert(
            resData
          )
          this.setState({ isLoggedin: false });

        } else {
          this.setState({ isLoggedin: true });
          console.log(this.state.isLoggedin);

          this.props.navigator.push({
            title: this.state.username || "Dashboard",
            component: Dashboard,
            passProps: {
              userInfo: resData,
              isLoggedin: this.state.isLoggedin
            }
          })
        }
      })
      .catch((err) => {
        console.error(err);
      });

      this.checkIsLoggedIn();


    InteractionManager.runAfterInteractions(() => {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        isLoggedin: false
      })
    })
  }

  render() {
    console.log('this.state.isLoggedin: ', this.state.isLoggedin);

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
