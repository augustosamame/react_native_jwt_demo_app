import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QuotesScreen from './screens/QuotesScreen';
import NewOrderSummaryScreen from './screens/NewOrderSummaryScreen';

  const QuotesStackNavigator = createStackNavigator({
    Quotes: {
      screen: props => <QuotesScreen {...props.screenProps} />,
    },
    NewOrderSummary: {
      screen: props => <NewOrderSummaryScreen {...props.screenProps} />,
    }
},
  {
    headerMode: 'none',
    initialRouteName: 'Quotes',
    defaultNavigationOptions: {

    },
  }

);

QuotesStackNavigator.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-list-box' : 'ios-list-box'}
        size={30}
        style={{ color: tintColor }}
      />
  ),
};

export default QuotesStackNavigator;
