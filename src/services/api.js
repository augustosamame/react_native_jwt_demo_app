import { AsyncStorage } from 'react-native';
import axios from 'axios';
import apiConfig from './apiConfig';
import deviceStorage from '../services/deviceStorage.js';

export const get = (endpoint, payload = {}, headers = {}) => {

  return new Promise((resolve, reject) => {

    AsyncStorage.getItem('id_token', (err, jwt) => {
      headers.Authorization = jwt

      axios({
        method: 'GET',
        url: apiConfig.development.url + endpoint,
        headers: headers,
        //data: payload,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
     });
 });

});

};
