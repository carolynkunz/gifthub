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

  // getDefaultProps() {
  //   return {
  //     date: new Date(),
  //     timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  //   };
  // }

  // getInitialState() {
  //   return {
  //     date: this.props.date,
  //     timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
  //   };
  // }

  onDateChange(date) {
    this.setState({date: date});
    // this.props.events.emit('date-picked', date);
  }

  render() {
    console.log(this.props);
    console.log(this.state.date);
    return (
      <View style={styles.scrollviewContainer}>
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange.bind(this)}
          minuteInterval={10}
          style={styles.datePicker}
        />
      </View>
    )
  }
};

module.exports = DatePicker;
