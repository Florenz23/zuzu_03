import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ConnectViewContainer from "./ConnectViewContainer"

class ConnectNavContainer extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Connect',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name='search' size={24} color='grey'/>
    ),
  };
  render() {
    return (
      <ConnectViewContainer />
    );
  }
}

export default ConnectNavContainer;
