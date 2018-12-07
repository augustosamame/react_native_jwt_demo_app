import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';
import NotificationDetail from './NotificationDetail'


export default class NotificationCardList extends React.Component {

  renderNotifications() {
    return this.props.notifications.filter(notif => notif.attributes.status === this.props.status)
                                    .map(notif => {
              return <NotificationDetail key={notif.id} notification={notif}>
                        {notif.attributes.title}
                      </NotificationDetail>
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderNotifications()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    alignSelf: 'stretch',
    marginTop: 20,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    elevation: 2,
    position: 'relative',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },

});
