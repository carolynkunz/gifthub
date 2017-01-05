import React, { Component } from 'react';
import { ActivityIndicator, AlertIOS, Image, InteractionManager, TouchableHighlight, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../styles/appStyle';
import api from '../utils/api';
import Login from './Login';

// import RecipientsDashboard from './RecipientsDashboard';

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
  }

  checkIsLoggedIn() {
    let url = 'https://carolynkunz-gifthub.herokuapp.com/api/token';
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

  // handleSubmitLogin() {
  //   let userLogin = {username: this.state.username, password: this.state.password};
  //   console.log('userLogin handleSubmitLogin: ', userLogin);
  //   let url = 'https://carolynkunz-gifthub.herokuapp.com/api/token';
  //   let headers = new Headers();
  //   let myInit = {
  //     method: "POST",
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
  //       console.log('handleSubmitLogin: ', resData);
  //       return resData
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  //
  // }

  handleSubmit() {
    let userSignup = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    let url = 'https://carolynkunz-gifthub.herokuapp.com/api/users';
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
        console.log('userSignup resData: ', resData);
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
          // this.handleSubmitLogin();

          this.props.navigator.push({
            title: this.state.username || "Login",
            component: Login,
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
    return (
      <View  style={styles.signupContainer}>
        <View>
          <TextInput
            autoCorrect={false}
            placeholder="First Name"
            placeholderTextColor="rgba(231, 73, 148, .75)"
            style={styles.signupTextInput}
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
          />
        </View>
        <View>
          <TextInput
            autoCorrect={false}
            placeholder="Last Name"
            placeholderTextColor="rgba(231, 73, 148, .75)"
            style={styles.signupTextInput}
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
          />
        </View>
        <View>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            placeholderTextColor="rgba(231, 73, 148, .75)"
            style={styles.signupTextInput}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
        </View>
        <View>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="User Name"
            placeholderTextColor="rgba(231, 73, 148, .75)"
            style={styles.loginTextInput}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
        </View>
        <View>
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(231, 73, 148, .75)"
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
