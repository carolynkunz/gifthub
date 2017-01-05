import React, { Component } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import styles from '../styles/appStyle';
import Dashboard from './Dashboard';
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
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;

    // return item[0] ? item[0].replace(/\ +/g, ' ') : item;

  }



  handleSubmit() {
    this.props.navigator.push({
      title: "Edit Recipient",
      component: EditRecipient,
      passProps: this.props.userInfo
    })
  }

  render() {
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
              onRequestClose={() => {alert("Modal has been closed.")}}
            >

              <Reminders
                passProps={this.props.userInfo}
                onRequestClose={() => {this.setState({
                  modalVisible: false
                })}}
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
        </ScrollView>
      </ScrollView>
      )
    }
};

module.exports = Recipient;
