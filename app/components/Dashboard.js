import { ActivityIndicator, Image, InteractionManager, Navigator, TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Component } from 'react';
import api from '../utils/api';
import Recipient from './Recipient';
import Login from './Login';
import NewRecipient from './NewRecipient';
import styles from '../styles/appStyle';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipientFirstName: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      recipientFirstName: event.nativeEvent.text,
    });

  }

  handleSubmit() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        isLoading: true
      })
    });

    api.getRecipientsByFirstname(this.state.recipientFirstName, this.props.userInfo.token)
      .then((res) => {
        if(res === 'Not Found') {
          this.setState({
            error: 'Recipient not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.first_name || "Recipient Profile",
            component: Recipient,
            passProps: {userInfo: res},
            isLoading: true
          });
          InteractionManager.runAfterInteractions(() => {
            this.setState({
              isLoading: false,
              error: false,
              recipientFirstName: ''
            })
          })
        }
    });

  }

  handleSubmitLogout() {
      let headers = new Headers();
      let myInit =
        { method: 'DELETE',
          headers: headers
        };

      headers.append("Accept", "application/json");

      fetch('http://localhost:8000/api/token', myInit)
        .then((res) => {
          this.props.checkIsLoggedIn();
        })
        .catch((err) => {
          console.error(err);
        })


    InteractionManager.runAfterInteractions(() => {
      this.setState({
        isLoggedin: false
      })
    });
    this.props.navigator.push({
      component: Login,
      isLoggedin: false,
      isLoading: true
    });
  }

  handleSubmitNewRecipient() {
    this.props.navigator.push({
      title: "Recipient Profile",
      component: NewRecipient,
      passProps: this.props.userInfo,
      isLoading: true
    });
  }


  render() {
    // console.log(this.props);
    return (
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.title}>Find Recipient</Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.recipientFirstName}
            onChange={this.handleChange.bind(this)}
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
        <Navigator
          renderScene={(route, navigator) =>
            <TouchableHighlight
              style={styles.button}
              onPress={this.handleSubmitLogout.bind(this)}
              underlayColor="white"
              >
                <Text style={styles.buttonText}> LOG OUT </Text>
              </TouchableHighlight>
          }
        />
        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmitNewRecipient.bind(this)}
            underlayColor="white"
            >
            <Text style={styles.buttonText}> Create New Recipient </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
};


module.exports = Dashboard;
