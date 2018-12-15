import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Asset, Font, Icon } from 'expo';
import axios from 'axios';
import { ENDPOINT, USER_TYPE } from './src/config'
import { Loading } from './src/components/common/';
import deviceStorage from './src/services/deviceStorage.js';
import TabNavigator from './src/TabNavigator';
import AuthNavigator from './src/AuthNavigator';
import MainNavigator from './src/MainNavigator';
import globalStyles from './src/globalStyles';
import * as api from './src/services/api'
import './ReactotronConfig';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true,
      unreadMessagesCount: 0,
      cartProductsCount: 0,
      cartItems: []
    };
    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.getBubblesCount = this.getBubblesCount.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.loadJWT();
  }

  state = {
    isLoadingComplete: false,
  };

  getBubblesCount() {
    const headers = {
      Authorization: this.state.jwt
    };
    axios({
      method: 'GET',
      url: `${ENDPOINT}/user`,
      headers: headers,
    }).then((response) => {
      this.setState({
        unreadMessagesCount: response.data.data.attributes.unread_notifications_count,
        cartProductsCount: response.data.data.attributes.cart_products_count,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving count of',
        loading: false
      });
    });
  }

  getCartItems = () => {
    api.get(
      '/carts'
    ).then((response) => {
      this.setState({
        cartItems: response.data.data,
        loading: false
      });
      console.log('FIRED GET CART ITEMS =>', this.state.cartItems)
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  newJWT(jwt) {
    this.setState({
      jwt: jwt
    });
    this.getBubblesCount();
    this.getCartItems();
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    } else if (!this.state.jwt) {
      //console.log(this.props, '<=== app.js');
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AuthNavigator screenProps={{setToken: this.newJWT }} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <MainNavigator
          screenProps={{ jwt: this.state.jwt,
                         unreadMessagesCount: this.state.unreadMessagesCount,
                         cartProductsCount: this.state.cartProductsCount,
                         deleteToken: this.deleteJWT,
                         getBubblesCount: this.getBubblesCount,
                         getCartItems: this.getCartItems,
                         cartItems: this.state.cartItems,
                      }}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
