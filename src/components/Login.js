import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage';
import { Input, TextLink, Loading, Button } from './common';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      loading: false
    };

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    const { username, password, password_confirmation } = this.state;

    this.setState({ error: '', loading: true });

    // NOTE Post to HTTPS only in production
    axios.post("http://localhost:3000/login",{
      user: {
        login: username,
        password: password
      }
    })
    .then((response) => {
      deviceStorage.saveKey("id_token", response.headers.authorization);
      this.props.newJWT(response.headers.authorization);
    })
    .catch((error) => {
      console.log(error);
      this.onLoginFail();
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Error al iniciar sesión',
      loading: false
    });
  }

  render() {
    const { username, password, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="nombre de usuario"
              label="Usuario"
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

        </View>
        <TextLink style={{ marginTop: 10 }} onPress={this.props.authSwitch}>
          Aún no estas registrado? Regístrate
        </TextLink>
        <TextLink onPress={this.props.forgotPassword}>
          Olvidaste tu contraseña?
        </TextLink>
        <Text style={errorTextStyle}>
          {error}
        </Text>

        {!loading ?
          <Button onPress={this.loginUser}>
            Ingresar
          </Button>
          :
          <Loading size={'large'} />}
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
  },
};

export { Login };
