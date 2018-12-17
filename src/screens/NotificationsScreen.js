import React from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
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
    this.getNotifications();
    this.props.getBubblesCount();
  }

  getNotifications() {
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

  refreshNotifications() {
    this.getNotifications();
    this.props.getBubblesCount();
    setTimeout(function () {
      api.post('/notifications_mark_as_read');
    }, 1000);
  }

  render() {
      if (this.state.loading) {
        return (
          <Loading size={'large'} />
         );
      } else {
        return (
        <View style={{ flex: 1 }}>
        <NavigationEvents
          onWillFocus={() => this.refreshNotifications()}
        />
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
