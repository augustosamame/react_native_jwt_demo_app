import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import TabNavigator from './TabNavigator';

  const MainNavigator = createStackNavigator({
    Main: TabNavigator },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        headerTitleStyle: {
          fontSize: 20,
          textTransform: 'uppercase'
        }
      }
  });

export default createAppContainer(MainNavigator);
