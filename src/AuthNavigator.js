import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthScreen from './screens/AuthScreen';

const AuthNavigator = createBottomTabNavigator(
  {
  Auth: (props) => {
    return <AuthScreen {...props.screenProps} />;
  }
  },
  { initialRouteName: 'Auth',
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: '#eee',
    }
  }
);

export default createAppContainer(AuthNavigator);
