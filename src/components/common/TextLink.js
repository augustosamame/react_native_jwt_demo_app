import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TextLink = ({ onPress, children }) => {
  const { button, text } = styles;
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress} style={button}>
        <Text style={text}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  text: {
    alignSelf: 'center',
    color: 'grey',
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'none',
    paddingBottom: 0
  },
  button: {
    marginTop: 5,
    marginBottom: 5
  }
};

export { TextLink };
