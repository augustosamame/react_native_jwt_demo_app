import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ModalScreen from './screens/ModalScreen';

  const HomeStackNavigator = createStackNavigator({
    Home: {
      screen: props => <HomeScreen {...props.screenProps} />,
    },
    Product: {
      screen: props => <ProductScreen {...props.screenProps} />,
      navigationOptions: {
        tabBarVisible: false,
      }
    },
    Modal: {
      screen: ModalScreen
    }
},
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    defaultNavigationOptions: {

    },
  }

);

HomeStackNavigator.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home'}
        size={26}
        style={{ color: tintColor }}
      />
  ),
};

export default HomeStackNavigator;
