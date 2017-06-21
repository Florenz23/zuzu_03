import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SettingsViewContainer from "./SettingsViewContainer"

class SettingsNavContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name='settings' size={24} color='grey'/>
    ),
  };
  render() {
    return (
      <SettingsViewContainer />
    );
  }
}

export default SettingsNavContainer;
