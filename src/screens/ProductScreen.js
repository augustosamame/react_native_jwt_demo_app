import React from 'react';
import { View, ScrollView, Text, Fragment, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as api from '../services/api'
import ProductCardList from '../components/productsScreen/ProductCardList'
import { Input, Loading, Button } from '../components/common';

class ProductScreen extends React.Component {
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
    const { container,
            searchProductContainer,
            productListContainer,
            optionButtonsContainer,
            firstButton,
            secondButton,
            backButton} = styles;

    return (
      <View style={container}>
        <View style={searchProductContainer}>
          <Text>Here goes Search</Text>
        </View>
        <ScrollView style={productListContainer}>
          <ProductCardList products={this.state.products} />
        </ScrollView>
        <View style={optionButtonsContainer}>
          <View style={firstButton}>
            <Button style={backButton} onPress={() => { this.props.navigation.goBack(); }} >
            <Ionicons
              name={'ios-arrow-back'}
              size={26}
              style={{ color: '#fff', alignSelf: 'center' }}
            />
            </Button>
        </View>
          <View style={secondButton}>
            <Button onPress={() => {this.props.navigation.navigate('Home'); }} >
              Agregar
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchProductContainer: {
    flex: 0.1,
    alignSelf: 'center',
  },
  productListContainer: {
    flex: 0.7,
  },
  optionButtonsContainer: {
    flex: 0.2,
    flexDirection: 'row',

    alignItems: 'stretch'
  },
  firstButton: {
    flex: 0.4,
  },
  secondButton: {
    flex: 0.6,
  },
  backButton: {
    flex: 1,
    width: 100,
    height: 100
  }
});

export default withNavigation(ProductScreen);
