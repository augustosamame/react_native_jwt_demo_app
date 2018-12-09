import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import deviceStorage from '../services/deviceStorage';
import { Input, TextLink, Loading, Button } from './common';
import Header from '../components/Header';

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
    const { container, form, section, errorTextStyle, iconContainer, inputContainer, titleText } = styles;

    return (
      <View style={container}>
        <Header title="¡Bienvenido Amigo Maestro!" />
        <View style={form}>
          <ImageBackground source={require('./cemento-login.jpg')} style={{ flex: 1, marginBottom: 30 }}>
          <View style={{marginTop: 120}}>
            <Text style={titleText}>Iniciar Sesión</Text>
            <View style={section}>
              <View style={iconContainer}>
                <Ionicons
                  name={'ios-person'}
                  size={26}
                  style={{ color: '#fff', alignSelf: 'center' }}
                />
              </View>
              <View style={inputContainer}>
                <Input
                  placeholder="Usuario"
                  value={username}
                  onChangeText={username => this.setState({ username })}
                />
              </View>
            </View>

          <View style={section}>
            <View style={iconContainer}>
              <Ionicons
                name={'ios-lock'}
                size={26}
                style={{ color: '#fff', alignSelf: 'center' }}
              />
            </View>
            <View style={inputContainer}>
              <Input
                secureTextEntry
                placeholder="Contraseña"
                value={password}
                onChangeText={password => this.setState({ password })}
              />
            </View>
          </View>
          </View>
          </ImageBackground>

        </View>

        <TextLink style={{ }} onPress={this.props.formSwitch}>
          Aún no estas registrado? Regístrate
        </TextLink>
        <TextLink style={{ }} onPress={this.props.forgotPassword}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 0.8
  },
  section: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 3,
    marginTop: 10,
    height: 40,
    marginLeft: '10%',
    marginRight: '10%',
  },
  titleText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  },
  iconContainer: {
    flex: 0.1,
    height: 40,
    borderRadius: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  inputContainer: {
    flex: 0.8,
    alignSelf: 'flex-start',
    marginLeft: -70,
  }
});

export { Login };
