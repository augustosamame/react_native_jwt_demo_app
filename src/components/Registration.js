import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { ENDPOINT, USER_TYPE } from '../config';
import { TextLink, Loading, Button, RegistrationInput } from './common';
import deviceStorage from '../services/deviceStorage';
import Header from '../components/Header';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      name: '',
      phone: '',
      error: '',
      loading: false
    };

    this.registerUser = this.registerUser.bind(this);
    this.onRegistrationFail = this.onRegistrationFail.bind(this);
  }

  onRegistrationFail(error) {
    console.log(error);
    this.setState({
      error: 'Error en el Registro',
      loading: false
    });
  }

  registerUser() {
    const { email, username, password, phone, name } = this.state;

    this.setState({ error: '', loading: true });

    // NOTE Post to HTTPS only in production
    axios.post(`${ENDPOINT}/signup`, {
      user: {
        phone,
        name,
        username,
        email,
        password,
        password_confirmation: password
      }
    },
    )
    .then((response) => {
      deviceStorage.saveKey('id_token', response.headers.authorization);
      this.props.newJWT(response.headers.authorization);
    })
    .catch((error) => {
      console.log(error.response.data.errors, '==> RESPONSE returned from API');
      this.onRegistrationFail(error);
    });
  }

  render() {
    const { email, phone, name, username, password, error, loading } = this.state;
    const { contents, section, errorTextStyle, container } = styles;

    return (
      <View style={container}>
        <Header
          title="Hola Maestro"
          dark
        />
      <View style={contents}>
        <View style={section}>
          <RegistrationInput
            label="Nombre y Apellido"
            value={name}
            onChangeText={name => this.setState({ name })}
          />
        </View>

        <View style={section}>
          <RegistrationInput
            label="Celular"
            value={phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={section}>
          <RegistrationInput
            label="Correo"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
        </View>


        <View style={section}>
          <RegistrationInput
            label="Nombre de Usuario"
            value={username}
            onChangeText={username => this.setState({ username })}
          />
        </View>

        <View style={section}>
          <RegistrationInput
            secureTextEntry
            label="Contraseña"
            value={password}
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <Text style={errorTextStyle}>
          {error}
        </Text>

        {!loading ?
          <Button onPress={this.registerUser}>
            Crear Registro
          </Button>
          :
          <Loading size={'large'} />
        }

          <TextLink onPress={this.props.formSwitch}>
            Ya tiene una cuenta? Inicia Sesión
          </TextLink>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#eee',
  },
  contents: {
    flex: 0.7,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};

export { Registration };
