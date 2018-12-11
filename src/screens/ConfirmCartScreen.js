import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Loading, Button } from '../components/common';

class ConfirmCartScreen extends React.Component {
  render() {
    const pic = { uri: 'https://s3.amazonaws.com/devtech-ferretero-dev/techo.jpg' };
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={pic} style={styles.imgContainer}>
          <Text style={styles.confirmText}>
            ¡Tu solicitud de cotización ha sido enviada!
          </Text>
          <Button onPress={() => this.props.navigation.navigate('Home')}>
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

export default withNavigation(ConfirmCartScreen);
