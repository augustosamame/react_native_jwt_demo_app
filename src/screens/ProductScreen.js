import React from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import * as api from '../services/api'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
      error: '',
      productCategory: this.props.navigation.getParam('productCategory', 'Fierros'),
    };
  }

  componentDidMount() {
    api.get(
      '/products?category=' + this.state.productCategory
    ).then((response) => {
      this.setState({
        products: response.data.data,
        loading: false
      });
      console.log(this.state.products);
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  render() {
    return <Button title={this.state.productCategory} onPress={() => {this.props.navigation.navigate('Home'); }} />;
  }
}

export default withNavigation(HomeScreen);
