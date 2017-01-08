import React, { Component } from 'react';
import { AlertIOS, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import styles from '../styles/recipientProfileStyle';
import RecipientsDashboard from './RecipientsDashboard';
import EditRecipient from './EditRecipient';
import Reminders from './Reminders';
import RNCalendarReminders from 'react-native-calendar-reminders';
import Separator from '../helpers/Separator';
import DatePicker from './DatePicker';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Touchable Opacity - wrap icon w/touchable opacity, set style to flex:1
    //put onPress()
// <Icon name="ios-log-out" size={20} color="#000" />


export default class Recipient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2016-10-01T09:45:00.000UTC',
      dueDate: '2016-10-01T09:45:00.000UTC',
      reminderNotes: '',
      modalVisible: false
    }
  }

  setModalVisible(visible) {
   this.setState({modalVisible: visible});

  }

  getRowTitle(recipient, item) {
    return item.charAt(0).toUpperCase() + item.slice(1).split(/(?=[A-Z])/).join(" ");
  }

  reminderAlert() {
    AlertIOS.alert(
      'Your reminder has been created.'
    );
  }

  handleSubmitDeleteRecipient() {
    let url = `https://carolynkunz-gifthub.herokuapp.com/recipients/${this.props.userInfo.id}`;
    let headers = new Headers();
    let myInit = {
      method: "DELETE",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${this.props.token}`
      }
      // body: JSON.stringify(this.props.user)
    };

    fetch(url, myInit)
    .then((res) => {
      console.log(res);
      // this.props.checkIsLoggedIn();
    })
    .catch((err) => {
      console.error(err);
    })

  }

  handleSubmit() {
    this.props.navigator.push({
      title: "Edit Recipient",
      component: EditRecipient,
      passProps: this.props.userInfo
    })
  }

  render() {
    console.log('Recipient props: ', this.props);
    let userInfo = this.props.userInfo;
    let topicArr = ['firstName', 'lastName', 'addressLineOne', 'addressLineTwo',
     'addressCity', 'addressState', 'addressZip', 'birthday', 'note'];

    let list = topicArr.map((item, index) => {
      if(!userInfo[item]) {
        return <View key={index}/>
      } else {
        return (
          <View key={index}>
            <View style={styles.profileRowContainer}>
              <Text style={styles.profileRowTitle}> {this.getRowTitle(userInfo, item)} </Text>
              <Text style={styles.profileRowContent}> {userInfo[item]} </Text>
            </View>
            <Separator />
          </View>
        )
      }
    });
    return (
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <ScrollView>
          {list}
          <TouchableHighlight
            style={styles.recipientButton}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white"
            >
              <Text style={styles.buttonText}> Edit
                {/* <Icon name="edit" size={20} color="#1F58A2" /> */}
              </Text>
            </TouchableHighlight>

            <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.modalVisible}
            >

              <Reminders
                passProps={this.props.userInfo}
                onRequestClose={() => {
                  this.setState({modalVisible: false}, () => {
                  })
                }}
              />

            </Modal>

            <TouchableHighlight
              style={styles.recipientButton}
              underlayColor="white"
              onPress={() => {
              this.setModalVisible(true)
            }}>
            <Text style={styles.buttonText}>Reminder
            </Text>

          </TouchableHighlight>

          <TouchableOpacity
            style={styles.recipientButton}
            onPress={this.handleSubmitDeleteRecipient.bind(this)}
            underlayColor="white"
            >
              <Text style={styles.buttonText}> Delete Recipient
                {/* <Icon name="close" size={20} color="#1F58A2" /> */}
              </Text>
            </TouchableOpacity>

        </ScrollView>
      </ScrollView>
      )
    }
};

module.exports = Recipient;
