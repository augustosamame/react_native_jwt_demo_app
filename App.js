import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Asset, Font, Icon } from 'expo';
import { Loading } from './src/components/common/';
import deviceStorage from './src/services/deviceStorage.js';
import TabNavigator from './src/TabNavigator';
import AuthNavigator from './src/AuthNavigator';
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

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }


  state = {
    isLoadingComplete: false,
  };

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
          <TabNavigator screenProps={{ jwt: this.state.jwt, deleteToken: this.deleteJWT }}
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
  },
});
