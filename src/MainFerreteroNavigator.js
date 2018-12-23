import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import FerreteroTabNavigator from './FerreteroTabNavigator';

  const MainFerreteroNavigator = createStackNavigator({
    Main: FerreteroTabNavigator },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        headerTitleStyle: {
          fontSize: 20,
          textTransform: 'uppercase'
        }
      }
  });

export default createAppContainer(MainFerreteroNavigator);
