import React from 'react';
import { View, Text, ScrollView, TextInput, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as api from '../services/api';
import { Loading, Button, ColorButton } from '../components/common/';
import ObraDetail from '../components/obrasScreen/ObraDetail'

class ObrasScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      obras: [],
      name: '',
      address: '',
      district: '',
      lote: '',
      urbanizacion: '',
      error: ''
    };
  }

  componentDidMount() {
    api.get(
      '/obras'
    ).then((response) => {
      this.setState({
        obras: response.data.data,
        loading: false,
      });
      }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  renderObras() {
    return this.state.obras.map(obra => {
              return (
                <ObraDetail
                  key={obra.id}
                  obra={obra}
                />
              );
    });
  }

  saveNewObra() {

    const newObraArray = {obra: {
        name: this.state.name,
        address: this.state.address,
        district: this.state.district,
        city: 'Lima',
        province: 'Lima',
        department: 'Lima',
      }
    };
    this.setState({
      loading: true,
    })

    api.post(
      '/obras',
      newObraArray
    ).then((response) => {
      this.setState({
        obras: response.data.data,
        name: '',
        address: '',
        district: '',
        lote: '',
        urbanizacion: '',
        loading: false,
      });
      Alert.alert(
        'Tu obra ha sido añadida con éxito', '',
        [
          { text: 'Aceptar',
            onPress: () => {}
         },
        ],
        { cancelable: false }
      );
      }).catch((error) => {
      this.setState({
        error: 'Error saving Obra',
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    }
    return (
            <View style={styles.container}>
              <ScrollView>
                {this.renderObras()}
                <View style= {{ flexDirection: 'row', marginLeft: 40, marginTop: 20 }}>
                  <Ionicons style={styles.obraIcon} name="ios-home" size={25} color="black"/>
                  <Text style={styles.name}>Mi Obra</Text>
                </View>
                <View style={styles.formObra}>
                  <TextInput
                      style={styles.input}
                      autoCapitalize='none'
                      selectTextOnFocus={true}
                      placeholder={'Nombre de mi Obra'}
                      onChangeText={(text) => this.setState({ name: text })}
                      value={this.state.name}
                      underlineColorAndroid="transparent"
                  />
                  <TextInput
                      style={styles.input}
                      autoCapitalize='none'
                      selectTextOnFocus={true}
                      placeholder={'Dirección'}
                      onChangeText={(text) => this.setState({ address: text })}
                      value={this.state.address}
                      underlineColorAndroid="transparent"
                  />
                  <TextInput
                      style={styles.input}
                      autoCapitalize='none'
                      selectTextOnFocus={true}
                      placeholder={'Distrito'}
                      onChangeText={(text) => this.setState({ district: text })}
                      value={this.state.district}
                      underlineColorAndroid="transparent"
                  />
                  <TextInput
                      style={styles.input}
                      autoCapitalize='none'
                      selectTextOnFocus={true}
                      placeholder={'Lote'}
                      onChangeText={(text) => this.setState({ lote: text })}
                      value={this.state.lote}
                      underlineColorAndroid="transparent"
                  />
                  <TextInput
                      style={styles.input}
                      autoCapitalize='none'
                      selectTextOnFocus={true}
                      placeholder={'Urbanización'}
                      onChangeText={(text) => this.setState({ urbanizacion: text })}
                      value={this.state.urbanizacion}
                      underlineColorAndroid="transparent"
                  />
                </View>
              </ScrollView>
              <Button
                style={styles.button}
                onPress={() => this.saveNewObra()}
              >
                Grabar Obra
              </Button>
              <Button
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Profile')}
              >
                Finalizar
              </Button>
            </View>
    );
  }

}

export default withNavigation(ObrasScreen)

const styles = {
  container: {
    flex: 1,
  },
  formObra: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingLeft: 5,
  },
  profileTextContainer: {
    alignSelf: 'center',
    marginTop: 10
  },
  profileText: {
    color: 'black',
    fontSize: 16
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  },
  obraIcon: {
    marginTop: -5,
    marginRight: 5,
    marginLeft: 10,
  },
};
