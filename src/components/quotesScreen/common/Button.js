import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Button extends React.Component {

  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.props.active ? '#444' : '#ccc',
          }}
        >
          <Text
            style={styles.inactiveText,
                    { color: this.props.active ? 'white' : 'grey',
                      backgroundColor: this.props.active ? '#444' : '#ccc'
                    }
                  }
          >
            {this.props.children}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '23%',
    height: 35,
  },
  inactiveText: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
