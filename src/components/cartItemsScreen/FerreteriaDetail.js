import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class FerreteriaDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  onPress() {
    this.props.toggleChoseFerreteria(this.props.ferreteria.id.toString(), !this.state.checked);
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const pic = { uri: this.props.ferreteria.attributes.image.medium.url };
    return (
      <View style={styles.container}>
        <ImageBackground source={pic} style={styles.imageContainer}>
          <View style={styles.CheckBoxContainer}>
            <CheckBox
              containerStyle={{ padding: 0 }}
              style={styles.CheckBox}
              checkedColor='black'
              uncheckedColor='black'
              checked={this.state.checked}
              onPress={() => this.onPress()}
            />
          </View>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: 'bold' }}>{this.props.ferreteria.attributes.name}</Text>
          <Text>{this.props.ferreteria.attributes.full_address}</Text>
          <Text style={{ fontWeight: 'bold' }}>Ver Mapa</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    height: 90,
    alignSelf: 'stretch',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    elevation: 2,
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 0.4,
    backgroundColor: '#ddd',
    padding: 0,
    justifyContent: 'flex-end',
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
  },
  CheckBoxContainer: {
    flex: 0.35,
    width: '33%',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  CheckBox: {
    padding: 0,
  },
  textContainer: {
    flex: 0.6,
    backgroundColor: '#ddd',
    padding: 10,
    paddingLeft: 20
  },
  headerText: {
    fontWeight: 'bold',
  },
  spinnerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    paddingLeft: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'orange'
  },
  spinnerIcon: {
      padding: 10,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
      fontSize: 20,
  },

});
