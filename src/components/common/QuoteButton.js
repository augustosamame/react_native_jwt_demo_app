import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuoteButton = ({ onPress, children }) => {
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
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'orange',
    backgroundColor: 'orange',
    borderRadius: 25,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  }
};

export { QuoteButton };
