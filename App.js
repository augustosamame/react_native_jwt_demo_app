import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Asset, Font, Icon } from 'expo';
//import AppNavigator from './src/AppNavigator';
import TabNavigator from './src/TabNavigator';
import AuthNavigator from './src/AuthNavigator';
import './ReactotronConfig';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      jwt: '',
    };
    this.newJWT = this.newJWT.bind(this);
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
    if (!this.state.jwt) {
      console.log(this.props, '<=== app.js');
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
          <TabNavigator />
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
