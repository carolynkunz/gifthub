import React, { Component } from 'react';
import { DatePickerIOS, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../styles/appStyle';

export default class DatePicker extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    }
  }

  render() {
    return (
      <View>
        <DatePickerIOS
          date={this.props.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.props.onDateChange.bind(this)}
          minuteInterval={10}
        />
      </View>
    )
  }
};

module.exports = DatePicker;
