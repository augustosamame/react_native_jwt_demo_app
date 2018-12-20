import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditObraButton = ({ customColor, onPress, children }) => {
  const { button, text } = styles;
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress} style={{ backgroundColor: 'white',
                                                   borderColor: 'white',
                                                   borderWidth: 3,
                                                   borderRadius: 25,
                                                   marginTop: 12,
                                                   marginLeft: 10,
                                                 }}>

      <Ionicons style={styles.obraIcon} name="ios-paper" size={25} color="orange"/>
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

export { EditObraButton };
