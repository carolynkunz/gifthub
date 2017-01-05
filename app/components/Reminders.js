import React, { Component } from 'react';
import { DatePickerIOS, Modal, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import DatePicker from './DatePicker';
import RNCalendarReminders from 'react-native-calendar-reminders';
import styles from '../styles/appStyle';

export default class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(Date.UTC(96, 11, 1, 0, 0, 0)),
      dueDate: new Date(Date.UTC(96, 11, 1, 0, 0, 0)),
      reminderNotes: '',
      modalVisible: false
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});

    RNCalendarReminders.authorizeEventStore()
      .then((status) => {
        console.log('authorizing EventStore...');

        RNCalendarReminders.saveReminder('GiftHub Reminder for: ' + this.props.passProps.firstName, {
          location: '',
          notes: this.state.reminderNotes,
          startDate: this.state.startDate,
          dueDate: this.state.dueDate,
          alarms: [{
            date: -1 // or absolute date
          }]
        });
      })
      .catch((err) => {
        console.error(err);
      })

    this.props.onRequestClose();

  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <View>
          <Text>Create Reminder</Text>

          {/* <View>
            <TextInput
              placeholder="Date"
              style={styles.recipientTextInput}
              onChangeText={(startDate) => this.setState({startDate})}
              value={this.state.startDate}
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
            <Text>Start Date</Text>
            <DatePicker
              onDateChange={(startDate) => this.setState({startDate})}
            />
          </View>

          <View>
            <Text>Due Date</Text>
            <DatePicker
              onDateChange={(dueDate) => this.setState({dueDate})}
            />
          </View>


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

          <Text>Save Reminder</Text>
        </TouchableHighlight>

      </View>
    </View>
    )
  }
};
module.exports = Reminders;
