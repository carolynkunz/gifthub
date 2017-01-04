import React, { Component } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import styles from '../styles/appStyle';
import Dashboard from './Dashboard';
import EditRecipient from './EditRecipient';
import RNCalendarReminders from 'react-native-calendar-reminders';
import Separator from '../helpers/Separator';



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

  getRowTitle(recipient, item) {
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }


  handleSubmit() {
    this.props.navigator.push({
      title: "Edit Recipient",
      component: EditRecipient,
      passProps: this.props.userInfo
    })
    // console.log(this.props.userInfo);
  }

  render() {
    console.log('this.props: ', this.props);
    console.log('this.props.userInfo: ', this.props.userInfo);
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
        <ScrollView style={styles.container}>
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
            </Modal>

            <TouchableHighlight
              style={styles.button}
              underlayColor="white"
              onPress={() => {
              this.setModalVisible(true)
            }}>
            <Text>Add Reminder</Text>
          </TouchableHighlight>
        </ScrollView>
      )
    }
};

module.exports = Recipient;
