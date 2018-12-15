import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { ENDPOINT } from '../config'
import deviceStorage from '../services/deviceStorage.js';

export const get = (endpoint, payload = {}, headers = {}) => new Promise((resolve, reject) => {
    AsyncStorage.getItem('id_token', (err, jwt) => {
      headers.Authorization = jwt

      axios({
        method: 'GET',
        url: ENDPOINT + endpoint,
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

export const post = (endpoint, payload = {}, headers = {}) => new Promise((resolve, reject) => {
    AsyncStorage.getItem('id_token', (err, jwt) => {
      headers.Authorization = jwt
      axios({
        method: 'POST',
        url: ENDPOINT + endpoint,
        headers: headers,
        data: payload,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
     });
 });
});

export const destroy = (endpoint, payload = {}, headers = {}) => new Promise((resolve, reject) => {
    AsyncStorage.getItem('id_token', (err, jwt) => {
      headers.Authorization = jwt
      axios({
        method: 'DELETE',
        url: ENDPOINT + endpoint,
        headers: headers,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
     });
 });
});
