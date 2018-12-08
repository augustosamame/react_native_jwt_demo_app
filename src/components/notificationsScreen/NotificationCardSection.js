import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';


export default class NotificationCardSection extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.props.title}</Text>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    marginTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 2,
    position: 'relative',
  },
  headerText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '400',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },

});
