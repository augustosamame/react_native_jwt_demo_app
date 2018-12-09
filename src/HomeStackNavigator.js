import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

  const HomeStackNavigator = createStackNavigator({
    Home: {
      screen: props => <HomeScreen {...props.screenProps} />,
    },
    Product: {
      screen: props => <ProductScreen {...props.screenProps} />,
    },
},
  {
    initialRouteName: 'Home',
    headerMode: 'none',
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
