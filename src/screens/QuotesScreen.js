import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../components/Header';

export default class QuotesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Mi Historial de Cotizaciones" />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
