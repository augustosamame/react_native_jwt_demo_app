import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import * as api from '../services/api';
import { Loading, Button, ColorButton } from '../components/common/';

export default class ObrasScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      email: '',
      username: '',
      phone: '',
      password: '',
      name: '',
      error: ''
    };
  }

  componentDidMount() {
    const headers = {
      Authorization: this.props.jwt
    };
    api.get('/user')
    .then((response) => {
      this.setState({
        email: response.data.data.attributes.email,
        phone: response.data.data.attributes.phone,
        username: response.data.data.attributes.username,
        name: response.data.data.attributes.name,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  render() {
    const { container, sectionTitleTextStyle, profileText, errorText, profileTextContainer } = styles;
    const { loading, email, username, phone, name, error, password } = this.state;

    if (loading) {
      return (
        <View style={container}>
          <Loading size={'large'} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Text style={sectionTitleTextStyle}>Mis Datos</Text>
        {email ?
          <View style={profileTextContainer}>
          <Text style={profileText}>
            Nombre y apellido: {name}
          </Text>
          <Text style={profileText}>
            Celular: {phone}
          </Text>
          <Text style={profileText}>
            Correo: {email}
          </Text>
          <Text style={profileText}>
            Nombre de usuario: {username}
          </Text>
          <Text style={profileText}>
            Contraseña: {password}
          </Text>
          </View>
          :
          <Text style={errorText}>
            {error}
          </Text>
        }
        <View style={{ marginTop: 20 }}>
          <Button
            onPress={() => { this.props.navigation.navigate('EditUser'); }}
          >
          Editar Mis Datos
          </Button>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            onPress={this.props.deleteToken}
          >
          Cerrar Sesión
          </Button>
        </View>
        <View style={{ marginTop: 10 }}>
          <ColorButton
            onPress={() => { this.props.navigation.navigate('Obras'); }}
            customColor={'yellow'}
          >
          Mis Obras
          </ColorButton>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  sectionTitleTextStyle: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 54,
    fontWeight: 'bold',
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
  }
};
