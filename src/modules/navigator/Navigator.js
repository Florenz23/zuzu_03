import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import CounterViewContainer from '../counter/CounterViewContainer';
import ThreadNavContainer from '../chat/chatMain/ThreadNavContainer';
import ThreadViewContainer from '../chat/chatMain/ThreadViewContainer';
import ThreadDetailViewContainer from '../chat/chatDetail/ThreadDetailViewContainer';
import ContactNavContainer from '../contacts/contactMain/ContactNavContainer';
import ContactViewContainer from '../contacts/contactMain/ContactViewContainer';
import ContactDetailViewContainer from '../contacts/contactDetail/ContactDetailViewContainer';
import SettingsNavContainer from '../settings/SettingsNavContainer';
import ConnectNavContainer from '../connect/connectMain/ConnectNavContainer';
import ConnectViewContainer from '../connect/connectMain/ConnectViewContainer';
import ConnectDetailViewContainer from '../connect/connectDetail/ConnectDetailViewContainer';

import React, {Component } from 'react'
import { Image, Button, StyleSheet } from 'react-native'

// const headerColor = 'rgb(20,152,255)';
const headerColor = '#39babd';
const activeColor = 'white';
// TabNavigator is nested inside StackNavigator
// here roots are defined


const MainNavigator = TabNavigator({
  Home: {
    screen: ConnectNavContainer,
  },
  Chat: {
    screen: ThreadNavContainer,
  },
  Contacts: {
    screen: ContactNavContainer,
  },
  Settings: {
    screen: SettingsNavContainer,
  },
}, {
  activeTintColor: '#e91e63',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: '39babd',
  },
});

// const AppNavigator = StackNavigator({
//   Home: {screen: MyHomeScreen},
//   InfiniteColorStack: {screen: ConnectNavContainer},
//   ThreadDetailViewContainer: {screen: ThreadDetailViewContainer},
//   ConnectDetail : {screen: ConnectDetailViewContainer},
// });


export default MainNavigator;
