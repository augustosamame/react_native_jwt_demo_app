import React from 'react';
import { View } from 'react-native';
import CategoryList from '../components/CategoryList';
import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Selecciona La Categoria" />
        <CategoryList style={{ justifyContent: 'space-evenly' }} />
      </View>
    );
  }
}
