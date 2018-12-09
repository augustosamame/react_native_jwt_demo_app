import React from 'react';
import { View, Button } from 'react-native';

export default class QuotesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
