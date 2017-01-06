import React, { Component } from 'react';
import { AlertIOS, DatePickerIOS, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import DatePicker from './DatePicker';
import RNCalendarReminders from 'react-native-calendar-reminders';
import Separator from '../helpers/Separator';
import styles from '../styles/appStyle';

export default class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      reminderNotes: '',
      reminderId: '',
      modalVisible: false
    }
  }

  onDateChange(date) {
    this.setState({date: date});
  }

  onRequestClose(visible) {
    this.setState({ modalVisible: false})
  }


  fetchAllReminders() {
    RNCalendarReminders.fetchAllReminders()
      .then((reminders) => {
        console.log(reminders);
        let reminderId;
        for (var i = 0; i < reminders.length; i++) {
          if (reminders[i].title === 'GiftHub Reminder for ' + this.props.passProps.firstName + ' ' + this.props.passProps.lastName) {
            reminderId = reminders[i].id;
            break;
          }
        }
        console.log('reminderId: ', reminderId);

        // Update the Reminder, or create a new one.
        if (reminderId !== undefined) {
          console.log('Reminder would be removed');
          // RNCalendarReminders.removeReminder('GiftHub Reminder for ' + this.props.passProps.firstName + ' ' + this.props.passProps.lastName, {
          //   // id: reminders[i].id,
          //   id: this.state.reminderId,
          //   location: '',
          //   notes: this.state.reminderNotes,
          //   dueDate: this.state.date,
          //   alarms: [{
          //     date: -1 // or absolute date
          //   }],
          // });
          // console.log('!==undefined: ', this.state.reminderId);
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});

    RNCalendarReminders.authorizeEventStore()
      .then((status) => {
        console.log('authorizing EventStore...');

        RNCalendarReminders.saveReminder('GiftHub Reminder for ' + this.props.passProps.firstName + ' ' + this.props.passProps.lastName, {
          location: '',
          notes: this.state.reminderNotes,
          dueDate: this.state.date.toISOString(),
          alarms: [{
            date: -1 // or absolute date
          }]
        })
        .then((id) => {
          console.log(`Saved ID: ${id}`);

          // this.setState({reminderId: id});
          // this.fetchAllReminders();
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <View>
          <Text style={styles.reminderNotesTitle}>Create a Gift Reminder for {this.props.passProps.firstName}</Text>


          <View style={styles.reminderNotes}>
            <TextInput
              placeholder="Note"
              placeholderTextColor="rgba(231, 73, 148, .75)"
              style={styles.reminderTextInput}
              onChangeText={(reminderNotes) => this.setState({reminderNotes})}
              value={this.state.reminderNotes}
            />
          </View>


          <View style={styles.datePickerView}>
            <DatePicker
              onDateChange={this.onDateChange.bind(this)}
              date={this.state.date}
            />
          </View>


          <View style={styles.reminderButtonView}>
            <TouchableHighlight
              style={styles.button}
              underlayColor="white"
              onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>

              <Text style={styles.buttonText}>Save Reminder</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.reminderButtonView}>
            <TouchableHighlight
              style={styles.button}
              underlayColor="white"
              onPress={() => {
              this.onRequestClose(!this.state.modalVisible)
            }}>

              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableHighlight>
          </View>

      </View>
    </ScrollView>
    )
  }
};
module.exports = Reminders;
