import React, { Component } from 'react';
import {
  ActivityIndicator,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import axios from 'axios';
import { ENDPOINT } from '../config';
import { Loading, TextLink, RegistrationInput, SmallRegistrationInput, Button } from './common';
import deviceStorage from '../services/deviceStorage';
import Header from '../components/Header';

class FerreteroRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'https://s3.amazonaws.com/devtech-ferretero-dev/cloud_upload.png',
      uploading: false,
      username: '',
      email: '',
      password: '',
      district: '',
      ruc: '',
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
    const { email, username, password, phone, name, ruc, district, image, uploading } = this.state;

    this.setState({ error: '', loading: true });

    // NOTE Post to HTTPS only in production
    axios.post(`${ENDPOINT}/signup`, {
      user: {
        phone,
        name,
        username,
        email,
        ruc,
        district,
        password,
        image,
        role: 'ferretero',
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
    const { email, phone, name, username, password, loading, error, ruc, district, image } = this.state;
    const { contents, section, sectionRuc, sectionCelular, errorTextStyle, container } = styles;

    return (
      <View style={container}>
        <Header
          title="Registro Ferretero"
          dark
        />
        <View style={styles.pickButtonContainer}>
          {this.maybeRenderImage()}
          {this.maybeRenderUploadingOverlay()}
        </View>
        <View style={contents}>
          <View style={section}>
            <RegistrationInput
              label="Nombre Ferretería"
              value={name}
              onChangeText={name => this.setState({ name })}
            />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
            <View style={sectionRuc}>
              <SmallRegistrationInput
                label="RUC"
                value={ruc}
                onChangeText={ruc => this.setState({ ruc })}
              />
            </View>

            <View style={sectionCelular}>
              <SmallRegistrationInput
                label="Celular"
                value={phone}
                onChangeText={phone => this.setState({ phone })}
              />
            </View>
          </View>

          <View style={section}>
            <RegistrationInput
              label="Zona / Distrito"
              value={district}
              onChangeText={district => this.setState({ district })}
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

  maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      );
    }
  };

  maybeRenderImage = () => {
    let {
      image
    } = this.state;

    if (!image) {
      return;
    }

    return (
      <View
        style={styles.maybeRenderContainer}>
        <View
          style={styles.maybeRenderImageContainer}>
          <TouchableHighlight onPress={this.pickImage}>
          <Image
            source={{ uri: image }}
            style={styles.maybeRenderImage}
          />
          </TouchableHighlight>
        </View>

      </View>
    );
  };

  pickImage = async () => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      this.handleImagePicked(pickerResult);
    }
  };

  handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      this.setState({
        uploading: true
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();
        console.log( uploadResult );
        this.setState({
          image: uploadResult.location
        });
      }
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Error al grabar imagen :(');
    } finally {
      this.setState({
        uploading: false
      });
    }
  };
}

async function uploadImageAsync(uri) {

  const apiUrl = `${ENDPOINT}/upload_ferretero_image`

  let uriParts = uri.split('.');
  let fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append('image', {
    uri,
    name: `image_randomid.${fileType}`,
    type: `image/${fileType}`,
  });

  let options = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

  return fetch(apiUrl, options);
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
  pickButtonContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
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
  sectionRuc: {
    flex: 0.5,
    paddingRight: 10,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  sectionCelular: {
    flex: 0.5,
    paddingLeft: 10,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  },
  maybeRenderUploading: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    width: 100,
  },
  maybeRenderImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden',
  },
  maybeRenderImage: {
    height: 100,
    width: 100,
  },
};

export { FerreteroRegistration };
