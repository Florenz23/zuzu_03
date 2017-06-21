import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ThreadViewContainer from "./ThreadViewContainer"

class ThreadNavContainer extends Component {
  static displayName = 'ColorView';

  static navigationOptions = {
    tabBarLabel: 'Chatt',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ props }) => (
      <Icon name='chat' size={24}  color='grey'/>
    ),
  };

  render() {
    return (
      <ThreadViewContainer />
    );
  }
}

export default ThreadNavContainer;
