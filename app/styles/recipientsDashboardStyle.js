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

  scrollviewContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    padding: 10
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

  addRecipientButton: {
    height: 45,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    // borderColor: '#8CD5B7',
    // borderWidth: 1,
    // borderRadius: 8,
    margin: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center'
  },

  icon: {
    paddingTop: 5,
  },

  addRecipientButtonText: {
    color: '#1F58A2',
    fontFamily: 'Avenir',
    fontSize: 18,

  },

  titleSeparator: {
    backgroundColor: '#E74994',
    flex: 1,
    height: 3,
    marginBottom: 10
  }

});

module.exports = styles;
