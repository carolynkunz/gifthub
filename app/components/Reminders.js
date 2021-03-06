import React, { Component } from 'react';
import { AlertIOS, Button, DatePickerIOS, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
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
    console.log('Reminders this.state: ',this.state);
  }

  onDateChange(date) {
    this.setState({date: date});
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
          // this.setState({reminderId: id});
        });
      })
      .catch((err) => {
        console.error(err);
      })

      this.props.onRequestClose();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <View>
          <Text style={styles.reminderNotesTitle}>Create a Gift Reminder for {this.props.passProps.firstName}</Text>
          <View style={styles.reminderNotes}>
            <TextInput
              placeholder="Note"
              placeholderTextColor="rgba(31, 88, 162, .75)"
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

          <View>
            <TouchableHighlight
              style={styles.reminderButton}
              underlayColor="white"
              onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>

              <Text style={styles.reminderButtonText}>Save Reminder</Text>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight
              style={styles.reminderButton}
              underlayColor="white"
              onPress={() => {
              this.props.onRequestClose()
            }}
            >
              <Text style={styles.reminderButtonText}>Cancel</Text>
            </TouchableHighlight>
          </View>

      </View>
    </ScrollView>
    )
  }
};
module.exports = Reminders;
