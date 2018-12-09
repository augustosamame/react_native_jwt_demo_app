import React from 'react';
import { View } from 'react-native';
import CategoryList from '../components/CategoryList';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      notifications: [],
      error: ''
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CategoryList
          style={{ justifyContent: 'space-evenly' }} />
      </View>
    );
  }
}
