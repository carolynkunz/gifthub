import React, { Component } from 'react';
import { DatePickerIOS, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
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
      modalVisible: false
    }
    console.log('reminders initial state: ', this.state);
  }

  onDateChange(date) {
    this.setState({date: date});
    // this.props.events.emit('date-picked', date);
  }


  // fetchAllReminders() {
  //   RNCalendarReminders.fetchAllReminders(reminders => {
  //     var reminderId;
  //     for (var i = 0; i < reminders.length; i++) {
  //       if (reminders[i].title === "'GiftHub Reminder for: ' + this.props.passProps.firstName") {
  //         reminderId = reminders[i].id;
  //         break;
  //       }
  //     }
  //
  //     // Update the Reminder, or create a new one.
  //     if (reminderId !== undefined) {
  //       RNCalendarReminders.saveReminder('GiftHub Reminder for: ' + this.props.passProps.firstName, {
  //         id: reminders[i].id,
  //         location: '',
  //         notes: '',
  //         startDate: this.state.date,
  //         alarms: [{
  //           date: -1 // or absolute date
  //         }],
  //       });
  //     } else {
  //       RNCalendarReminders.saveReminder('GiftHub Reminder for: ' + this.props.passProps.firstName, {
  //         location: '',
  //         notes: '',
  //         startDate: this.state.date,
  //         alarms: [{
  //           date: -1 // or absolute date
  //         }],
  //       });
  //     }
  //   });
  //
  //
  // }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});

    RNCalendarReminders.authorizeEventStore()
      .then((status) => {
        console.log('authorizing EventStore...');

        RNCalendarReminders.saveReminder('GiftHub Reminder for: ' + this.props.passProps.firstName, {
          location: '',
          notes: this.state.reminderNotes,
          date: date,
          alarms: [{
            date: -1 // or absolute date
          }]
        });
        console.log('date: ', this.state.date);
      })
      .catch((err) => {
        console.error(err);
      })

    // this.fetchAllReminders();

    this.props.onRequestClose();

  }

  render() {
    console.log(this.props);
    return (
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <View>
          <Text style={styles.buttonText}>Create Reminder</Text>

          {/* <View>
            <TextInput
              placeholder="Date"
              style={styles.recipientTextInput}
              onChangeText={(date) => this.setState({date})}
              value={this.state.date}
            />
          </View> */}
          {/* <View>
            <TextInput
              placeholder="Due Date"
              style={styles.recipientTextInput}
              onChangeText={(dueDate) => this.setState({dueDate})}
              value={this.state.dueDate}
            />
          </View> */}

          <View>
            <Text style={styles.buttonText}>Start Date</Text>
            <DatePicker
              onDateChange={this.onDateChange.bind(this)}

              // onDateChange={(date) => this.setState({date})}
            />
          </View>

          <Separator />

          <View>
            <TextInput
              placeholder="Reminder Notes"
              style={styles.recipientTextInput}
              onChangeText={(reminderNotes) => this.setState({reminderNotes})}
              value={this.state.reminderNotes}
            />
          </View>

          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={() => {
            this.setModalVisible(!this.state.modalVisible)
          }}>

          <Text style={styles.buttonText}>Save Reminder</Text>
        </TouchableHighlight>

      </View>
    </ScrollView>
    )
  }
};
module.exports = Reminders;
