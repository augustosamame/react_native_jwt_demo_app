import React from 'react';
import { View, Text, Button } from 'react-native';

export default class CartScreen extends React.Component {
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
