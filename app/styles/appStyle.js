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
    fontSize: 18,
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

  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#3066BE'
  },

  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#F1E4E8'
  },

});

module.exports = styles;
