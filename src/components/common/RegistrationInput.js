import React from 'react';
import { View, TextInput, Text } from 'react-native';

const RegistrationInput = ({ label, value, onChangeText, placeholder, secureTextEntry, multiline, numberOfLines }) => {
const {inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCapitalize='none'
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  labelStyle: {
    flex: 1,
    fontSize: 16,
    marginBottom: 0,
  },
  inputStyle: {
    flex: 1,
    width: 300,
    color: '#666',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingRight: 5,
    paddingLeft: 15,
    fontSize: 16,
    lineHeight: 20,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 0.2,
  }
};

export { RegistrationInput };
