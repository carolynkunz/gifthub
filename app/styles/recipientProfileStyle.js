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
  buttonText: {
    fontFamily: 'Avenir-Medium',
    fontSize: 18,
    color: '#1F58A2',
    alignSelf: 'center',
    margin: 5,
    padding: 5
  },

  profileRowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 5
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
    // paddingBottom: 5,
  },

  recipientTextInput: {
    fontFamily: 'Avenir',
    backgroundColor: '#FFF',
    height: 40,
    padding: 5,
    margin: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#8CD5B7',
    borderRadius: 8,
    color: '#1F58A2'
  },

  recipientNotesTextInput: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#8CD5B7',
    borderRadius: 8,
    color: '#1F58A2',
    fontFamily: 'Avenir',
    fontSize: 18,
    height: 100,
    margin: 10,
    padding: 4
  },

  scrollviewContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    padding: 10
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
  }

});

module.exports = styles;
