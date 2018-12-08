import { AsyncStorage } from 'react-native';
import axios from 'axios';

const deviceStorage = {

  getNotificationCount() {
    const headers = {
      Authorization: this.state.jwt
    };
    axios({
      method: 'GET',
      url: 'http://localhost:3000/user',
      headers: headers,
    })
    .then((response) => {
      this.setState({
        unreadMessagesCount: response.data.data.attributes.unread_notifications_count,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving count of',
        loading: false
      });
    });
  },

  async saveKey(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async loadJWT() {
    try {
      const value = await AsyncStorage.getItem('id_token');
      if (value !== null) {
        this.setState({
          jwt: value,
          loading: false
        });
        this.getNotificationCount();
      } else {
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  async deleteJWT() {
    try{
      await AsyncStorage.removeItem('id_token')
      .then(
        () => {
          this.setState({
            jwt: ''
          })
        }
      );
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
};

export default deviceStorage;
