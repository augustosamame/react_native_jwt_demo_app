import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './header';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Hola Maestro" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
