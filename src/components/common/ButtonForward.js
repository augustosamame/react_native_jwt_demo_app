import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ButtonBack extends React.Component {

  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
            borderRadius: 50,
          }}
        >
          <Text>
            {this.props.children}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    height: 50,
    flex: 1,
  },
});
