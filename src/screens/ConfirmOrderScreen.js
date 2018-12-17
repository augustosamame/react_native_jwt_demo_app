import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import * as api from '../services/api'
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';
import { Loading, Button } from '../components/common';

class ConfirmOrderScreen extends React.Component {

  resetOrder = () => {
    this.props.navigation.dispatch(StackActions.popToTop());
    //this.handleChooseStage('stage_confirmed')
    this.props.navigation.navigate('Quotes');
  }

  render() {
    const pic = { uri: 'https://s3.amazonaws.com/devtech-ferretero-dev/techo.jpg' };
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={pic} style={styles.imgContainer}>
          <Text style={styles.confirmText}>
            {`¡Ferreteria ${this.props.navigation.getParam('ferreteriaName', '')} ha recibido la confirmación de tu pedido!`}
          </Text>
          <Button onPress={this.resetOrder}>
            ¡Entendido!
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirmText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  imgContainer: {
     resizeMode: 'cover',
     justifyContent: 'center',
     alignItems: 'center',
     flex: 1,
     backgroundColor: 'transparent',
   },
});

export default withNavigation(ConfirmOrderScreen);
