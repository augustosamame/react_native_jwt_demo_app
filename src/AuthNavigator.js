import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthScreen from './screens/AuthScreen';

const AuthNavigator = createBottomTabNavigator(
  {
  Auth: { screen: AuthScreen,
              navigationOptions: {
                //tabBarLabel: 'Perfil',
                tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                name={focused ? 'ios-person' : 'ios-person'}
                size={26}
                style={{ color: tintColor }}
              />
            ),
      }
  },
},
  { initialRouteName: 'Auth',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#ff6600',
      activeBackgroundColor: '#333',
      inactiveTintColor: '#ff6600',
      inactiveBackgroundColor: '#333',
    }
  }
);

export default createAppContainer(AuthNavigator);
