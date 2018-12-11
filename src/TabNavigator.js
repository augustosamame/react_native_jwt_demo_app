import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import ProfileScreen from './screens/ProfileScreen';
import QuotesScreen from './screens/QuotesScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import CartScreen from './screens/CartScreen';
import HomeStackNavigator from './HomeStackNavigator'

const TabNavigator = createMaterialTopTabNavigator(
  {
  Profile: {
    screen: props => <ProfileScreen {...props.screenProps} />,
    navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-person' : 'ios-person'} //TODO change to focused icon
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  },
  Home: HomeStackNavigator,
  Quotes: { screen: props => <QuotesScreen {...props.screenProps} />,
              navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                name={focused ? 'ios-list-box' : 'ios-list-box'}
                size={26}
                style={{ color: tintColor }}
              />
            ),
      }
  },
  Notifications: { screen: props => <NotificationsScreen {...props.screenProps} />,
              navigationOptions: ({ screenProps }) => ({
                tabBarIcon: ({ tintColor, focused }) => (
                  <IconBadge
                    MainElement={
                      <Ionicons
                        name={focused ? 'ios-notifications' : 'ios-notifications'}
                        size={26}
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
  Cart: { screen: props => <CartScreen {...props.screenProps} />,
            navigationOptions: ({ screenProps }) => ({
              tabBarIcon: ({ tintColor, focused }) => (
                <IconBadge
                  MainElement={
                    <Ionicons
                      name={focused ? 'ios-cart' : 'ios-cart'}
                      size={26}
                      style={{ color: tintColor }}
                    />
                  }
                  BadgeElement={
                    <Text style={{ color: '#FFFFFF' }}>{screenProps.cartProductsCount}</Text>
                  }
                  IconBadgeStyle={{ width: 15,
                    height: 15,
                    position: 'absolute',
                    top: 1,
                    left: -6,
                    marginLeft: 15,
                    backgroundColor: 'red' }}
                  Hidden={screenProps.cartProductsCount === 0}
                />
          )
          })
  },
},
  { initialRouteName: 'Cart',
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
   Profile: { title: 'Hola Maestro' },
   Home: { title: 'Selecciona la Categoría' },
   Quotes: { title: 'Mi Historial de Cotizaciones' },
   Notifications: { title: 'Notificaciones' },
   Cart: { title: 'Mi Pedido' },
};

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = screenTitles[routeName].title;

  let tabBarVisible = false

  if (headerTitle === 'Selecciona la Categoría') {
    tabBarPosition = false;
  }
  return {
    headerTitle,
    tabBarVisible
  };
};

export default TabNavigator;
