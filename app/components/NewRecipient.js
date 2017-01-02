import React, { Component } from 'react';
import { InteractionManager, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Dashboard from './Dashboard';
import styles from '../styles/appStyle';

export default class NewRecipient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      addressLineOne: '',
      addressLineTwo: '',
      addressCity: '',
      addressState: '',
      addressZip: '',
      birthday: '',
      note: '',
      userInfo: this.props,
      // isLoggedin: false,
      isLoading: false,
      error: false
    }
    console.log(this.state.userInfo.id);
  }

  handleSubmit() {
    let newRecipient = {
      userId: this.state.userInfo.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      addressCity: this.state.addressCity,
      addressState: this.state.addressState,
      addressZip: this.state.addressZip,
      birthday: this.state.birthday,
      note: this.state.note
    };

    console.log('newRecipient: ', newRecipient);

    let url = 'http://localhost:8000/recipients';
    let headers = new Headers();
    let myInit = {
      method: "POST",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecipient)
    };

    fetch(url, myInit)
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
        return res.text();
      })
      .then((resData) => {
        this.props.navigator.push({
          title: this.state.username || "Dashboard",
          component: Dashboard,
          passProps: {
            userInfo: resData,
            isLoggedin: this.state.isLoggedin
          }
        })
      })
      .catch((err) => {
        console.error(err);
      });
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        firstName: '',
        lastName: '',
        addressLineOne: '',
        addressLineTwo: '',
        addressCity: '',
        addressState: '',
        addressZip: '',
        birthday: '',
        note: '',
        // isLoggedin: false,
        isLoading: false,
        error: false
      })
    })
  }

  render() {
    console.log(this.props);
    return (
      <View  style={styles.loginContainer}>
        <View>
          <TextInput
            autoCorrect={false}
            placeholder="First Name"
            style={styles.recipientTextInput}
            returnKeyType="next"
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
          />
        </View>
        <View>
          <TextInput
            autoCorrect={false}
            placeholder="Last Name"
            style={styles.recipientTextInput}
            returnKeyType="next"
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
          />
        </View>
        <View>
          <TextInput
            autoCorrect={false}
            placeholder="Address Line One"
            style={styles.recipientTextInput}
            returnKeyType="next"
            onChangeText={(addressLineOne) => this.setState({addressLineOne})}
            value={this.state.addressLineOne}
          />
        </View>
        <View>
          <TextInput
            autoCorrect={false}
            placeholder="Address Line Two"
            style={styles.recipientTextInput}
            returnKeyType="next"
            onChangeText={(addressLineTwo) => this.setState({addressLineTwo})}
            value={this.state.addressLineTwo}
          />
        </View>
        <View>
          <TextInput
            placeholder="City"
            style={styles.recipientTextInput}
            returnKeyType="next"
            onChangeText={(addressCity) => this.setState({addressCity})}
            value={this.state.addressCity}
          />
        </View>
        <View>
          <TextInput
            placeholder="State"
            style={styles.recipientTextInput}
            returnKeyType="next"
            onChangeText={(addressState) => this.setState({addressState})}
            value={this.state.addressState}
          />
        </View>
        <View>
          <TextInput
            placeholder="Zipcode"
            style={styles.recipientTextInput}
            onChangeText={(addressZip) => this.setState({addressZip})}
            value={this.state.addressZip}
          />
        </View>
        <View>
          <TextInput
            placeholder="Birthday"
            style={styles.recipientTextInput}
            returnKeyType="next"
            keyboardType="numeric"
            onChangeText={(birthday) => this.setState({birthday})}
            value={this.state.birthday}
          />
        </View>
        <View>
          <TextInput
            placeholder="Notes"
            style={styles.recipientTextInput}
            multiline={true}
            // onContentSizeChange={ nativeEvent: { contentSize: { width, height } } }
            onChangeText={(note) => this.setState({note})}
            value={this.state.note}
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


module.exports = NewRecipient;
