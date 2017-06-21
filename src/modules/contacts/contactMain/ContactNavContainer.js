import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ContactViewContainer from "./ContactViewContainer"

class ContactNavContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Contacts',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name='contacts' size={24} color='grey'/>
    ),
  };
  render() {
    return (
      <ContactViewContainer />
    );
  }
}

export default ContactNavContainer;
