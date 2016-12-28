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
console.log(resData);
console.log('isLoggedin: ', resData);
        this.setState({ isLoggedin: resData });
      })
      .catch((err) => {
        console.error(err);
      });
  }



  handleSubmit() {
    let userLogin = {username: this.state.username, password: this.state.password};
    let url = 'http://localhost:8000/api/token';
    let headers = new Headers();
    let myInit = {
      method: "POST",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLogin)
    };

    fetch(url, myInit)
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
        return res.text();
      })
      .then((resData) => {
console.log('resData: ', resData);
        if (resData === 'Username must not be blank') {
          AlertIOS.alert(
            resData
          )
        } else if (resData === 'Password must not be blank') {
          AlertIOS.alert(
            resData
          )
        } else if (resData === 'Bad username or password') {
          AlertIOS.alert(
            resData
          )
        } else {
          this.props.navigator.push({
            title: this.state.username || "Dashboard",
            component: Dashboard,
            passProps: {
              checkIsLoggedIn: this.checkIsLoggedIn,
              isLoggedin: this.state.isLoggedin,
              userInfo: resData
            }
          })
        }
      })
      .catch((err) => {
        console.error(err);
      });

      this.checkIsLoggedIn();
      console.log(this.state.isLoggedin);


      InteractionManager.runAfterInteractions(() => {
        this.setState({
          username: '',
          password: '',
          isLoggedin: false
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
