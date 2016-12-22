import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import styles from '../styles/appStyle';
// import api from '../utils/api';
// import Dashboard from './Dashboard';


export default class Main extends Component {
  constructor(props) {
    super(props);
    let headers = new Headers();

    var myInit =
      { method: 'GET',
        headers: headers,
      };

    headers.append("Accept", "application/json");

    fetch('http://localhost:8000/api/users', { headers })
      .then((res) => res.json())
      .then(data => console.log(data));

    fetch('http://localhost:8000/recipients', myInit)
      .then((res) => res.json())
      .then(data => console.log(data));

    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }

  handleSubmit() {
    this.setState({
      isLoading: true
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Sign In to GiftHub</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white"
          >
          <Text style={styles.buttonText}> SUBMIT </Text>
        </TouchableHighlight>
        {/* <ActivityIndicator
          animating={this.state.isLoading}
          size='large'></ActivityIndicator> */}
      </View>
    )
  }
};

module.exports = Main;
