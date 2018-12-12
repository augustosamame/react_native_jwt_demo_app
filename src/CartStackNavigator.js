import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import CartScreen from './screens/CartScreen';
import ChooseObraScreen from './screens/ChooseObraScreen';
import ChooseFerreteriaScreen from './screens/ChooseFerreteriaScreen';
import ConfirmCartScreen from './screens/ConfirmCartScreen';


  const CartStackNavigator = createStackNavigator({
    Cart: {
      screen: props => <CartScreen {...props.screenProps} />,
    },
    ChooseObra: {
      screen: props => <ChooseObraScreen {...props.screenProps} />,
    },
    ChooseFerreteria: {
      screen: props => <ChooseFerreteriaScreen {...props.screenProps} />,
      navigationOptions: {
        tabBarVisible: false,
      }
    },
    ConfirmCart: {
      screen: props => <ConfirmCartScreen {...props.screenProps} />,
    },
},
  {
    headerMode: 'none',
    initialRouteName: 'Cart',
    defaultNavigationOptions: {

    },
  }

);

CartStackNavigator.navigationOptions = ({ screenProps }) => ({
  tabBarIcon: ({ tintColor, focused }) => (
    <IconBadge
      MainElement={
        <Ionicons
          name={focused ? 'ios-cart' : 'ios-cart'}
          size={30}
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
});


export default CartStackNavigator;
