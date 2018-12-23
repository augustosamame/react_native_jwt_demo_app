import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator';
import QuotesStackNavigator from './QuotesStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import InitialRoute from './InitialRoute';

const FerreteroTabNavigator = createMaterialTopTabNavigator(
  {
  Profile: ProfileStackNavigator,
  Quotes: QuotesStackNavigator,
  Notifications: { screen: props => <NotificationsScreen {...props.screenProps} />,
              navigationOptions: ({ screenProps }) => ({
                tabBarIcon: ({ tintColor, focused }) => (
                  <IconBadge
                    MainElement={
                      <Ionicons
                        name={focused ? 'ios-notifications' : 'ios-notifications'}
                        size={30}
                        style={{ color: tintColor }}
                      />
                    }
                    BadgeElement={
                      <Text style={{ color: '#FFFFFF' }}>{screenProps.unreadMessagesCount}</Text>
                    }
                    IconBadgeStyle={{ width: 15,
                      height: 15,
                      position: 'absolute',
                      top: 1,
                      left: -6,
                      marginLeft: 15,
                      backgroundColor: 'red' }}
                    Hidden={screenProps.unreadMessagesCount === 0}
                  />

            )
          })

  },
},
  { initialRouteName: 'Profile',
    tabBarPosition: 'top',
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: 'orange',
      inactiveTintColor: 'orange',
      style: {
        backgroundColor: '#555',
      },
      indicatorStyle: {
        color: '#orange'
      }
    }
  }
);

const screenTitles = {
   Profile: { title: 'Hola Ferretero' },
   Quotes: { title: 'Mis Cotizaciones' },
   Notifications: { title: 'Notificaciones' }
};

FerreteroTabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = screenTitles[routeName].title;
  const tabBarVisible = false;
  return {
    headerTitle,
    tabBarVisible
  };
};

export default FerreteroTabNavigator;
