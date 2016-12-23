import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#F1E4E8',
    borderColor: '#F1E4E8',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 14,
    color: '#3066BE',
    alignSelf: 'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#8EA4D2'
  },

  image: {
    height: 350,
  },

  loginContainer: {
    flex: 3,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#3066BE'
  },

  loginTextInput: {
    height: 50,
    paddingTop: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#F1E4E8'
  },

  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#3066BE'
  },

  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#F1E4E8'
  },

  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15
  },

  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#F1E4E8'
  },

});

module.exports = styles;
