import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    height: 40,
    alignSelf: 'stretch',
    marginTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 2,
    position: 'relative',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },

});
