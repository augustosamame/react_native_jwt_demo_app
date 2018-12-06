import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import CategoryList from '../components/CategoryList';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
