import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ColorButton = ({ customColor, onPress, children }) => {
  console.log(customColor, " ==> COLOR PASSED TO BUTTONCOLOR");
  const { button, text } = styles;
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress} style={{ backgroundColor: 'blue',
                                                   borderColor: 'blue',
                                                   flex: 1,
                                                   borderWidth: 3,
                                                   borderRadius: 25,
                                                   marginTop: 5,
                                                   marginLeft: 50,
                                                   marginRight: 50,
                                                   marginBottom: 5,
                                                 }}>
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
};

export { ColorButton };
