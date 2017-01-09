import React, { Component } from 'react';
import { AlertIOS, InteractionManager, Modal, StyleSheet, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Recipient from './Recipient';
import styles from '../styles/appStyle';

export default class EditRecipient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      addressLineOne: this.props.addressLineOne,
      addressLineTwo: this.props.addressLineTwo,
      addressCity: this.props.addressCity,
      addressState: this.props.addressState,
      addressZip: this.props.addressZip,
      birthday: this.props.birthday,
      note: this.props.note,
      userId: this.props.userId,
      userInfo: this.props.userInfo,
      height: 0,
      isLoggedin: true,
      isLoading: false,
      error: false
    }

    console.log(this.state);
  }

  handleSubmit() {
    let editRecipient = {
      userId: this.props.userId || ' ',
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      addressCity: this.state.addressCity,
      addressState: this.state.addressState,
      addressZip: this.state.addressZip,
      birthday: this.state.birthday || ' ',
      note: this.state.note || undefined
    };

    let url = `https://carolynkunz-gifthub.herokuapp.com/recipients/${this.state.id}`;
    let headers = new Headers();
    let myInit = {
      method: "PATCH",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editRecipient)
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

        this.props.navigator.replacePreviousAndPop({
          title: "Recipient",
          component: Recipient,
          passProps: {
            userInfo: resData,
            isLoggedin: this.state.isLoggedin
          }
        })
      })
      .catch((err) => {
        console.error(err);
      });
    // InteractionManager.runAfterInteractions(() => {
    //   this.setState({
    //     firstName: '',
    //     lastName: '',
    //     addressLineOne: '',
    //     addressLineTwo: '',
    //     addressCity: '',
    //     addressState: '',
    //     addressZip: '',
    //     birthday: '',
    //     note: '',
    //     // isLoggedin: false,
    //     isLoading: false,
    //     error: false
    //   })
    // })
  }

  render() {
    return (
      <ScrollView  style={styles.scrollviewContainer}>
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
            style={[styles.recipientNotesTextInput, {height: Math.max(35, this.state.height)}]}
            multiline={true}
            onContentSizeChange={(event) =>
              this.setState({ height: event.nativeEvent.contentSize.height })
            }
            onChangeText={(note) => this.setState({note})}
            value={this.state.note}
          />
        </View>
          <TouchableHighlight
            style={styles.recipientButton}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white"
            >
            <Text style={styles.buttonText}> SUBMIT </Text>
          </TouchableHighlight>
      </ScrollView>
    )
  }
};


module.exports = EditRecipient;
