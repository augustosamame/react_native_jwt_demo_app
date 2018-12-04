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

export default const TabNavigator = createBottomTabNavigator(
  {

  Profile: { screen: ProfileScreen,
              navigationOptions: {
                //tabBarLabel: 'Perfil',
                tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                name={focused ? 'ios-person' : 'ios-person'} //TODO change to focused icon
                size={26}
                style={{ color: tintColor }}
              />
            ),
      }
  },
  Home: { screen: HomeScreen,
          navigationOptions: {
            //tabBarLabel: 'Inicio',
            tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
          //  tabBarIcon: () => {
          //                <Image
          //                style={{ width: 50, height: 50 }}
          //                source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          //                />
        //},
        }
      },
  Quotes: { screen: QuotesScreen,
              navigationOptions: {
                //tabBarLabel: 'Perfil',
                tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                name={focused ? 'ios-list-box' : 'ios-list-box'}
                size={26}
                style={{ color: tintColor }}
              />
            ),
      }
  },
  Notifications: { screen: NotificationsScreen,
              navigationOptions: {
                //tabBarLabel: 'Perfil',
                tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                name={focused ? 'ios-notifications' : 'ios-notifications'}
                size={26}
                style={{ color: tintColor }}
              />
            ),
      }
  },
  Cart: { screen: CartScreen,
              navigationOptions: {
                //tabBarLabel: 'Perfil',
                tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                name={focused ? 'ios-cart' : 'ios-cart'}
                size={26}
                style={{ color: tintColor }}
              />
            ),
      }
  },
  Auth: { screen: Auth,
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
  { initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#ff6600',
      activeBackgroundColor: '#333',
      inactiveTintColor: '#ff6600',
      inactiveBackgroundColor: '#333',
    }
  }
);
