import React from 'react';
import { StyleSheet } from 'react-native';

const colors = {
  cyanCobaltBlue: '#1F58A2',
  raspberryPink: '#E74994',
  coralReef: '#F17567',
  pearlAqua: '#8CD5B7',
  paleMagentaPink: '#EF8FCC',
  vividTangerine: '#FFAD87',
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  buttonText: {
    fontFamily: 'Avenir-Medium',
    fontSize: 18,
    color: '#1F58A2',
    alignSelf: 'center',
    margin: 5,
    padding: 5
  },

  container: {
    flex: 1,
    backgroundColor: '#1F58A2'
  },

  datePicker: {
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 20,
    padding: 10,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },

  datePickerView: {
    flex: 1,
    marginTop: 20,
    paddingTop: 10,
    borderWidth: 1,
    borderColor: '#FFAD87',
    borderRadius: 8,
  },

  image: {
    height: 350,
  },

  loginButton: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  loginContainer: {
    flex: 1,
    // marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: '#1F58A2',
  },

  loginTitle: {
    fontFamily: 'Avenir-Medium',
    marginBottom: 80,
    fontSize: 42,
    textAlign: 'center',
    color: '#E74994',
  },

  loginTextInput: {
    fontFamily: 'Avenir',
    backgroundColor: '#FFF',
    height: 50,
    padding: 4,
    margin: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 8,
    color: '#1F58A2'
  },

  loginButton: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 40,
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 120
  },

  signupButton: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 8,
    // marginBottom: 40,
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 120
  },

  mainButtonText: {
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    color: '#E74994',
    alignSelf: 'center',
    margin: 5,
    padding: 5
  },

  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    // backgroundColor: '#1F58A2',
    width: null,
    height: null,
  },

  mainTitle: {
    fontFamily: 'Avenir-Medium',
    marginBottom: 80,
    fontSize: 42,
    textAlign: 'center',
    color: '#E74994',
  },

  profileContainer: {
    flex: 1,
    marginBottom: 10,
  },

  profileRowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },

  profileRowTitle: {
    fontFamily: 'Avenir',
    color: '#1F58A2',
    fontSize: 18,
    paddingBottom: 5
  },

  profileRowContent: {
    fontFamily: 'Avenir',
    fontSize: 16,
    paddingBottom: 5,
  },

  recipientButton: {
    height: 45,
    width: 275,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderColor: '#8CD5B7',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  recipientContainer: {
    flex: 1,
    // marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },

  recipientTextInput: {
    fontFamily: 'Avenir',
    backgroundColor: '#FFF',
    height: 30,
    padding: 4,
    margin: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#8CD5B7',
    // borderRadius: 8,
    color: '#1F58A2'
  },

  recipientNotesTextInput: {
    fontFamily: 'Avenir',
    backgroundColor: '#FFF',
    padding: 4,
    margin: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#8CD5B7',
    borderRadius: 8,
    color: '#1F58A2'
  },

  reminderNotes: {
    flex: 1,
    // marginTop: 20,
    // paddingTop: 5,
    // paddingLeft: 5,
    borderWidth: 1,
    borderColor: '#E74994',
    borderRadius: 8,
  },

  reminderNotesTitle: {
    color: '#1F58A2',
    fontFamily: 'Avenir',
    fontSize: 16,
    marginBottom: 15,
    marginTop: 15,
    paddingTop: 15,
    textAlign: 'center',
  },

  reminderTextInput: {
    fontFamily: 'Avenir',
    backgroundColor: '#FFF',
    height: 60,
    padding: 4,
    margin: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#8CD5B7',
    borderRadius: 8,
    color: '#1F58A2'
  },

  reminderView: {
    flex: 1,
    marginTop: 20,
    paddingTop: 50,
    borderWidth: 1,
    borderColor: '#EF8FCC',
    borderRadius: 8,
  },

  reminderButtonView: {
    flex: 1,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#EF8FCC',
    borderRadius: 8,
  },

  reminderTextInput: {
    fontFamily: 'Avenir',
    backgroundColor: '#FFF',
    height: 50,
    padding: 10,
    margin: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#1F58A2'
  },

  scrollviewContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    padding: 10
  },

  searchInput: {
    fontFamily: 'Avenir',
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#FFF'
  },

  separator: {
    height: 1,
    backgroundColor: '#E74994',
    flex: 1,
    // marginLeft: 15
  },

  signupContainer: {
    flex: 1,
    // marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1F58A2'
  },

  signupTitle: {
    fontFamily: 'Avenir-Medium',
    marginBottom: 40,
    fontSize: 28,
    textAlign: 'center',
    color: '#E74994',
  },


  signupTextInput: {
    fontFamily: 'Avenir',
    backgroundColor: '#FFF',
    height: 50,
    padding: 4,
    margin: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    // color: '#1F58A2',
    color: 'rgba(31, 88, 162, .75)'
  },

  title: {
    fontFamily: 'Avenir',
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF'
  },

});

module.exports = styles;
