import React from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import NotificationCardSection from '../components/notificationsScreen/NotificationCardSection';
import NotificationCardList from '../components/notificationsScreen/NotificationCardList';
import { Loading } from '../components/common/';
import globalStyles from '../globalStyles';

export default class NotificationsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      notifications: [],
      error: ''
    };
  }

  componentDidMount() {
    const headers = {
      Authorization: this.props.jwt
    };
    axios({
      method: 'GET',
      url: 'http://localhost:3000/notifications',
      headers: headers,
    }).then((response) => {
      this.setState({
        notifications: response.data.data,
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
      if (this.state.loading) {
        return (
          <Loading style={globalStyles.loading} size={'large'} />
         );
      } else {
        return (
        <View style={{ flex: 1 }}>
        <Header title="Notificaciones" />
        <ScrollView style={{ flex: 1 }}>
          <NotificationCardSection title='Nuevas'>
            <NotificationCardList status='status_unread' notifications={this.state.notifications} />
          </NotificationCardSection>
          <NotificationCardSection title='Anteriores'>
            <NotificationCardList status='status_read' notifications={this.state.notifications} />
          </NotificationCardSection>
        </ScrollView>
        </View>
        );
      }
  }
}
