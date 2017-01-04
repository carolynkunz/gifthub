import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import RNCalendarReminders from 'react-native-calendar-reminders';
import styles from '../styles/appStyle';

export default class Reminders extends Component {
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

    RNCalendarReminders.authorizeEventStore()
     .then((status) => {
       console.log('authorizing EventStore...');
     })
     .catch((err) => {
       console.error(err);
     })

     const firstName = this.props.userInfo.firstName;

      RNCalendarReminders.saveReminder(firstName, {
        location: '',
        notes: this.state.reminderNotes,
        startDate: this.state.date,
        dueDate: this.state.dueDate,
        alarms: [{
          date: -1 // or absolute date
        }],
        recurrence: 'weekly',
       //  recurrenceInterval: '2'
      });

  }

  render() {
    console.log('this is the reminders component');
    console.log(this.props);
    return (
      <View style={{marginTop: 22}}>
        <View>
          <Text>Create Reminder</Text>

          <View>
            <TextInput
              placeholder="Date"
              style={styles.recipientTextInput}
              onChangeText={(date) => this.setState({date})}
              value={this.state.date}
            />
          </View>

          <View>
            <TextInput
              placeholder="Due Date"
              style={styles.recipientTextInput}
              onChangeText={(dueDate) => this.setState({dueDate})}
              value={this.state.dueDate}
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

          <Text>Hide Modal</Text>
        </TouchableHighlight>

      </View>
    </View>
    )
  }
};


module.exports = Reminders;
