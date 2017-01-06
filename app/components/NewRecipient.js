import React, { Component } from 'react';
import { InteractionManager, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Recipient from './Recipient';
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
      firstName: this.state.firstName,
      lastName: this.state.lastName || undefined,
      addressLineOne: this.state.addressLineOne || undefined,
      addressLineTwo: this.state.addressLineTwo || undefined,
      addressCity: this.state.addressCity || undefined,
      addressState: this.state.addressState || undefined,
      addressZip: this.state.addressZip || undefined,
      birthday: this.state.birthday,
      note: this.state.note
    };

    console.log('newRecipient: ', newRecipient);

    let url = 'https://carolynkunz-gifthub.herokuapp.com/recipients';
    let headers = new Headers();
    let myInit = {
      method: "POST",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
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
        this.setState({ userInfo: resData });
        console.log('this.state.userInfo: ',this.state.userInfo);

        this.props.navigator.push({
          title: this.state.firstName || " Recipient",
          component: Recipient,
          passProps: {
            userInfo: resData,
            isLoggedin: this.state.isLoggedin,
            token: this.props.token
            // userRecipients: this.state.newRecipient
          }
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    // console.log('NewRecipient Props: ', this.props);
    return (
      <View  style={styles.recipientContainer}>
        <View>
          <TextInput
            autoCorrect={false}
            placeholder="First Name"
            placeholderTextColor="rgba(231, 73, 148, .75)"
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
            placeholderTextColor="rgba(231, 73, 148, .75)"
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
            placeholderTextColor="rgba(231, 73, 148, .75)"
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
            placeholderTextColor="rgba(231, 73, 148, .75)"
            style={styles.recipientTextInput}
            returnKeyType="next"
            onChangeText={(addressLineTwo) => this.setState({addressLineTwo})}
            value={this.state.addressLineTwo}
          />
        </View>
        <View>
          <TextInput
            placeholder="City"
            placeholderTextColor="rgba(231, 73, 148, .75)"
            style={styles.recipientTextInput}
            returnKeyType="next"
            onChangeText={(addressCity) => this.setState({addressCity})}
            value={this.state.addressCity}
          />
        </View>
        <View>
          <TextInput
            placeholder="State"
            placeholderTextColor="rgba(231, 73, 148, .75)"
            style={styles.recipientTextInput}
            returnKeyType="next"
            onChangeText={(addressState) => this.setState({addressState})}
            value={this.state.addressState}
          />
        </View>
        <View>
          <TextInput
            placeholder="Zipcode"
            placeholderTextColor="rgba(231, 73, 148, .75)"
            style={styles.recipientTextInput}
            returnKeyType="next"
            onChangeText={(addressZip) => this.setState({addressZip})}
            value={this.state.addressZip}
          />
        </View>
        <View>
          <TextInput
            placeholder="Birthday"
            placeholderTextColor="rgba(231, 73, 148, .75)"
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
            placeholderTextColor="rgba(231, 73, 148, .75)"
            style={styles.recipientNotesTextInput}
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
            <Text style={styles.buttonText}> SAVE RECIPIENT </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
};


module.exports = NewRecipient;
