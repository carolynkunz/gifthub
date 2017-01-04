import React, { Component } from 'react';
import { ActivityIndicator, AlertIOS, Image, InteractionManager, TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../styles/appStyle';
import api from '../utils/api';
import Dashboard from './Dashboard';
import RecipientsDashboard from './RecipientsDashboard';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      user_id: '',
      recipientIds: '',
      token: '',
      userInfo: '',
      userRecipients: [],
      isLoggedin: false,
      isLoading: false,
      error: false
    }
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

  getUserRecipients() {
    const token = this.state.token;
    let url = 'http://localhost:8000/api/recipients'

    let headers = new Headers();
    let myInit = {
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Authorization': `Bearer ${this.state.token}`
      },
    };

    fetch(url, myInit)
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
        return res.text();
      })
      .then((resData) => {
        if (resData === 'Unauthorized') {
          AlertIOS.alert(
            resData
          )
        } else {
          this.setState({
            userRecipients: resData,
          })

          let mapRecipientIds = this.state.userRecipients.map((item, index) => {
            return item.id;
          })

          this.setState({
            recipientIds: mapRecipientIds,
          })

          this.props.navigator.push({
            title: this.state.username || "Recipients Dashboard",
            component: RecipientsDashboard,
            passProps: {
              checkIsLoggedIn: this.checkIsLoggedIn,
              isLoading: true,
              isLoggedin: this.state.isLoggedin,
              recipientIds: this.state.recipientIds,
              token: this.state.token,
              userInfo: this.state.userInfo,
              userRecipients: this.state.userRecipients
            }
          })
        }
      })
      .catch((err) => {
        console.error(err);
      });

      InteractionManager.runAfterInteractions(() => {
        this.setState({
          username: '',
          password: '',
          isLoggedin: false
        })
      })
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
          this.setState({ isLoggedin: false });
        } else if (resData === 'Password is incorrect') {
          AlertIOS.alert(
            resData
          )
          this.setState({ isLoggedin: false });
        } else if (resData === 'Username is incorrect') {
          AlertIOS.alert(
            resData
          )
          this.setState({ isLoggedin: false });
        } else {
          this.setState({
            isLoggedin: true,
            user_id: resData.id,
            userInfo: resData,
            token: resData.token,
          });
          this.getUserRecipients(this.state.token);
        }
      })
      .catch((err) => {
        console.error(err);
      });

      this.checkIsLoggedIn();
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
          <ActivityIndicator
            animating={this.state.isLoading}
            size='large'></ActivityIndicator>
        </View>
      </View>
    )
  }
};

module.exports = Login;
