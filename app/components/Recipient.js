import React, { Component } from 'react';
import { AlertIOS, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import styles from '../styles/appStyle';
import RecipientsDashboard from './RecipientsDashboard';
import EditRecipient from './EditRecipient';
import Reminders from './Reminders';
import RNCalendarReminders from 'react-native-calendar-reminders';
import Separator from '../helpers/Separator';

import DatePicker from './DatePicker';


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

  handleSubmitRecipientsDashboard() {
    this.props.navigator.push({
      title: "Recipients Dashboard",
      component: RecipientsDashboard,
      passProps: this.props.userInfo
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
    console.log(this.props);

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
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white"
            >
              <Text style={styles.buttonText}> Edit Recipient </Text>
            </TouchableHighlight>

            <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.modalVisible}
              // onRequestClose={this.reminderAlert()}
            >

              <Reminders
                passProps={this.props.userInfo}
                onRequestClose={() => {
                  this.setState({modalVisible: false}, () => {
                    // this.reminderAlert()
                  })
                }}
              />

            </Modal>

            <TouchableHighlight
              style={styles.button}
              underlayColor="white"
              onPress={() => {
              this.setModalVisible(true)
            }}>
            <Text style={styles.buttonText}>Add Reminder</Text>

          </TouchableHighlight>

          <Separator />

          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={() => {
            this.handleSubmitRecipientsDashboard()
          }}>
          <Text style={styles.buttonText}>Recipients Dashboard</Text>

        </TouchableHighlight>
        </ScrollView>
      </ScrollView>
      )
    }
};

module.exports = Recipient;
