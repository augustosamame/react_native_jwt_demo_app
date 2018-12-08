import React from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import NotificationCardSection from '../components/notificationsScreen/NotificationCardSection';
import NotificationCardList from '../components/notificationsScreen/NotificationCardList';
import { Loading } from '../components/common/';
import globalStyles from '../globalStyles';
import * as api from '../services/api'

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
    api.get(
      '/notifications'
    ).then((response) => {
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
          <Loading size={'large'} />
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
