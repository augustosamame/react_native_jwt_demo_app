import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MaestroTabNavigator from './MaestroTabNavigator';

  const MainMaestroNavigator = createStackNavigator({
    Main: MaestroTabNavigator },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        headerTitleStyle: {
          fontSize: 20,
          textTransform: 'uppercase'
        }
      }
  });

export default createAppContainer(MainMaestroNavigator);
