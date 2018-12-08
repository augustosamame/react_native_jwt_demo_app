import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import QuotesScreen from './screens/QuotesScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import CartScreen from './screens/CartScreen';

const TabNavigator = createMaterialTopTabNavigator(
  {
  Profile: {
    screen: props => <ProfileScreen {...props.screenProps} />,
    navigationOptions: {
        //tabBarLabel: 'Perfil',
        title: 'Header Title',
        tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-person' : 'ios-person'} //TODO change to focused icon
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  },
  Home: {
    screen: props => <HomeScreen {...props.screenProps} />,
    navigationOptions: {
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
  Quotes: { screen: props => <QuotesScreen {...props.screenProps} />,
              navigationOptions: {
                //tabBarLabel: 'Perfil',
                title: 'My Title',
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
                //tabBarLabel: 'Perfil',
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
              navigationOptions: {
                backgroundColor: '#333',
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
},
  { initialRouteName: 'Quotes',
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
   Home: { title: 'Selecctiona la Categoría' },
   Quotes: { title: 'Mi Historial de Cotizaciones' },
   Notifications: { title: 'Notificaciones' },
   Cart: { title: 'Mi Pedido' },
};



TabNavigator.navigationOptions = ({ navigation }) => {

  const { routeName } = navigation.state.routes[navigation.state.index];
  // You can do whatever you like here to pick the title based on the route name
  //const headerTitle = this.screenTitles[routeName].title;
  const headerTitle = screenTitles[routeName].title

  return {
    headerTitle,
  };
};

//export default createAppContainer(MainNavigator);
export default TabNavigator;
