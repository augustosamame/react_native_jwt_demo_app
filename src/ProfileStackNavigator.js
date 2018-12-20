import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ObrasScreen from './screens/ObrasScreen';

  const HomeStackNavigator = createStackNavigator({
    Profile: {
      screen: props => <ProfileScreen {...props.screenProps} />,
    },
    EditProfile: {
      screen: props => <EditProfileScreen {...props.screenProps} />,
      navigationOptions: {
        tabBarVisible: false,
      }
    },
    Obras: {
      screen: props => <ObrasScreen {...props.screenProps} />,
      navigationOptions: {
        tabBarVisible: false,
      }
    },
},
  {
    headerMode: 'none',
    initialRouteName: 'Profile',
    defaultNavigationOptions: {

    },
  }

);

HomeStackNavigator.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-person' : 'ios-person'}
        size={30}
        style={{ color: tintColor }}
      />
  ),
};

export default HomeStackNavigator;
