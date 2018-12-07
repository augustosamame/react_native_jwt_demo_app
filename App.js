import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Asset, Font, Icon } from 'expo';
import axios from 'axios';
import { Loading } from './src/components/common/';
import deviceStorage from './src/services/deviceStorage.js';
import TabNavigator from './src/TabNavigator';
import AuthNavigator from './src/AuthNavigator';
import globalStyles from './src/globalStyles';
import './ReactotronConfig';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true
    };
    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }

  state = {
    isLoadingComplete: false,
  };

  getNotificationCount() {
    console.log(this.state.jwt + '<= state when calling notification with API');
    const headers = {
      Authorization: this.state.jwt
    };
    axios({
      method: 'GET',
      url: 'http://localhost:3000/user',
      headers: headers,
    }).then((response) => {
      this.setState({
        unreadMessagesCount: response.data.data.attributes.unread_notifications_count,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving count of',
        loading: false
      });
    });
  }

  newJWT(jwt) {
    this.setState({
      jwt: jwt
    });
    this.getNotificationCount();
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading style={globalStyles.loading} size={'large'} />
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
          <TabNavigator
          screenProps={{ jwt: this.state.jwt,
                         unreadMessagesCount: this.state.unreadMessagesCount,
                         deleteToken: this.deleteJWT
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
