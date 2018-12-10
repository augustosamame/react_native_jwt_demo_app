import React from 'react';
import { Text, View } from 'react-native';
import { Loading, Button } from '../components/common';

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>Tu producto ha sido añadido con éxito</Text>
        <Button onPress={() => this.props.navigation.navigate('Home')}>
          Aceptar
        </Button>
      </View>
    );
  }
}

export default ModalScreen;
