import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';
import TimeAgo from 'react-native-timeago';

export default class NotificationDetail extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>{this.props.notification.attributes.title}</Text>
        </View>
        <View style={styles.TextContainer}>
          <Text>{this.props.notification.attributes.text}</Text>
          <TimeAgo style={{ color: 'orange' }} time={this.props.notification.attributes.created_at} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    height: 90,
    alignSelf: 'stretch',
    marginTop: 10,
    backgroundColor: '#fff',
    elevation: 2,
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 0.3,
    fontWeight: '300',
    backgroundColor: '#ddd',
    padding: 10
  },
  TextContainer: {
    flex: 0.7,
    backgroundColor: '#ddd',
    padding: 10
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
