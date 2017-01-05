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
    fontSize: 16,
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
    // position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 30,
    padding: 10,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },

  image: {
    height: 350,
  },

  loginContainer: {
    flex: 1,
    // marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1F58A2'
  },

  loginTextInput: {
    fontFamily: 'Avenir',
    backgroundColor: '#FFF',
    height: 50,
    padding: 4,
    margin: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#1F58A2'
  },

  mainButton: {
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

  mainButtonText: {
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    color: '#1F58A2',
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
    backgroundColor: '#1F58A2'
  },

  mainTitle: {
    fontFamily: 'Avenir',
    marginBottom: 20,
    fontSize: 38,
    textAlign: 'center',
    color: '#FFF'
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
    fontSize: 14,
    paddingBottom: 5
  },

  recipientTextInput: {
    fontFamily: 'Avenir',
    backgroundColor: '#FFF',
    height: 30,
    padding: 4,
    margin: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#1F58A2'
  },

  reminderSeparator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15,
    padding: 10
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
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15
  },

  signupContainer: {
    flex: 1,
    // marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1F58A2'
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
