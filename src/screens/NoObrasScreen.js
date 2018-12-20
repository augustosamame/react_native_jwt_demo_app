import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Loading, Button } from '../components/common';

class ChooseFerreteriaScreen extends React.Component {

  render() {
    const { container,
            textContainer,
            optionButtonsContainer,
            firstButton,
            secondButton,
            backButton } = styles;
    return (
      <View style={container}>
        <View style={textContainer}>
          <Text style={styles.text}>Debe haber creado por lo menos una Obra en su Perfil para generar un Pedido</Text>
        </View>
        <View style={optionButtonsContainer}>
          <View style={firstButton}>
            <Button style={backButton} onPress={() => { this.props.navigation.goBack(); }} >
            <Ionicons
              name={'ios-arrow-back'}
              size={26}
              style={{ color: '#fff', alignSelf: 'center' }}
            />
            </Button>
        </View>
          <View style={secondButton}>
            <Button onPress={() => this.props.navigation.navigate('Obras')} >
              Crear Obra
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionButtonsContainer: {
    flex: 0.2,
    flexDirection: 'row',

    alignItems: 'stretch'
  },
  firstButton: {
    flex: 0.4,
  },
  secondButton: {
    flex: 0.6,
  },
  backButton: {
    flex: 1,
    width: 100,
    height: 100
  }
});

export default withNavigation(ChooseFerreteriaScreen);
