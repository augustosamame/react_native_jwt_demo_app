import React, { Component, Fragment } from 'react';
import Image from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer,
         createBottomTabNavigator,
        } from 'react-navigation';
import { Loading } from './src/components/common/';
import Auth from './src/screens/Auth';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import QuotesScreen from './src/screens/QuotesScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import CartScreen from './src/screens/CartScreen';
import TabNavigator from './src/TabNavigator';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
    };
  }

  render() {
     if (!this.state.jwt) {
      return (
        <AppContainer />
          //<Auth />
        //</AppContainer>
      );
    } else if (this.state.jwt) {
      return (
        <AppContainer />
        //  <HomeScreen />
      //  </AppContainer>
      );
    }
  }
}

const AppContainer = createAppContainer(TabNavigator);
