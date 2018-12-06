import React from 'react';
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Header from '../components/Header';
import { Loading } from '../components/common/';

export default class ProfileScreen extends React.Component {
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
    axios({
      method: 'GET',
      url: 'http://localhost:3000/user',
      headers: headers,
    }).then((response) => {
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
    const { container, misDatosTextStyle, profileText, errorText, profileTextContainer } = styles;
    const { loading, email, username, phone, name, error, password } = this.state;

    if (loading){
      return(
        <View style={container}>
          <Loading size={'large'} />
        </View>
      )
    } else {

    return (
      <View style={{ flex: 1 }}>
        <Header title="Hola Maestro" />
        <Text style={misDatosTextStyle}>Mis Datos</Text>
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
        <Button
          title="Cerrar Sesión"
          onPress={this.props.deleteToken}

        />
      </View>
    );
  }
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  misDatosTextStyle: {
    fontSize: 18,
    marginTop: 10
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
