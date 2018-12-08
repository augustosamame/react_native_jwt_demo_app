import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Input, TextLink, Loading, Button } from './common';
import deviceStorage from '../services/deviceStorage';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      name: '',
      phone: '',
      password_confirmation: '',
      error: '',
      loading: false
    };

    this.registerUser = this.registerUser.bind(this);
    this.onRegistrationFail = this.onRegistrationFail.bind(this);
  }

  registerUser() {
    console.log(this.props);
    const { email, username, password, password_confirmation, phone, name } = this.state;

    this.setState({ error: '', loading: true });

    // NOTE Post to HTTPS only in production
    axios.post("http://localhost:3000/signup", {
      user: {
        phone: phone,
        name: name,
        username: username,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    },
    )
    .then((response) => {
      deviceStorage.saveKey('id_token', response.headers.authorization);
      this.props.newJWT(response.headers.authorization);
    })
    .catch((error) => {
      console.log(error);
      this.onRegistrationFail();
    });
  }

  onRegistrationFail() {
    this.setState({
      error: 'Error en el registro',
      loading: false
    });
  }

  render() {
    const { email, phone, name, username, password, password_confirmation, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>

        <View style={section}>
          <Input
            placeholder="nombre completo"
            label="Nombre y Apellido"
            value={name}
            onChangeText={name => this.setState({ name })}
          />
        </View>

        <View style={section}>
          <Input
            placeholder="número celular"
            label="Celular"
            value={phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={section}>
          <Input
            placeholder="usuario@email.com"
            label="Correo"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={form}>
          <View style={section}>
            <Input
              placeholder="Usuario"
              label="Nombre de Usuario"
              value={username}
              onChangeText={username => this.setState({ username })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="contraseña"
              label="Contraseña"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="confirmar contraseña"
              label="Confirmar Contraseña"
              value={password_confirmation}
              onChangeText={password_confirmation => this.setState({ password_confirmation })}
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
        </View>
        <TextLink onPress={this.props.formSwitch}>
          Ya tiene una cuenta? Inicia Sesión
        </TextLink>
      </Fragment>
    );
  }
}

const styles = {
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};

export { Registration };
