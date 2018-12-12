import React from 'react';
import { View, ScrollView, Text, Fragment, StyleSheet, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements'
import * as api from '../services/api'
import ProductCardList from '../components/productsScreen/ProductCardList'
import { Loading, Button } from '../components/common';

class ProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
      ordered_products: [],
      error: '',
      productCategory: this.props.navigation.getParam('productCategory', 'Fierros'),
    };
    this.updateOrderedProducts = this.updateOrderedProducts.bind(this)
  }

  componentDidMount() {
    api.get(
      '/products?category=' + this.state.productCategory
    ).then((response) => {
      this.setState({
        products: response.data.data,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  updateOrderedProducts(addedProducts) {
    this.setState({
      ordered_products: [...this.state.ordered_products, addedProducts]
    });
  }

  incrementalSearchProducts() {
    console.log('incremental Search');
  }

  clearSearchProducts() {
    console.log('cleared Search');
  }

  updateCart() {
    //we get only last sent value
    const dirtyArray = this.state.ordered_products;
    const cleanArray = Array.from(dirtyArray.reduce((acc, item) => {
      acc.set(item[0], item);
      return acc;
    }, new Map()).values());


    api.post(
      '/carts',
      cleanArray
    ).then((response) => {
      this.setState({
        ordered_products: [],
        loading: false
      });
      //this.props.navigation.navigate('Modal');
      Alert.alert(
        'Tu producto ha sido añadido con éxito', '',
        [
          { text: 'Aceptar',
            onPress: () => {
                            this.props.navigation.navigate('Home')
                            this.props.getBubblesCount()
                            this.props.getCartItems()
                           }
         },
        ],
        { cancelable: false }
      );
    }).catch((error) => {
      this.setState({
        error: 'Error sending data',
        loading: false
      });
      console.log(error);
    });
  }

  render() {
    const { container,
            searchProductContainer,
            productListContainer,
            optionButtonsContainer,
            firstButton,
            secondButton,
            backButton } = styles;
    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    } else {
      return (
        <View style={container}>
          <View style={searchProductContainer}>
          <SearchBar
            round
            onChangeText={this.incrementalSearchProducts}
            onClear={this.clearSearchProducts}
            placeholder='Busca tu producto'
            inputContainerStyle={{ backgroundColor: '#fff' }}
          />
          </View>
          <ScrollView style={productListContainer}>
            <ProductCardList
              updateOrderedProducts={this.updateOrderedProducts}
              products={this.state.products}
            />
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
              <Button onPress={() => this.updateCart()} >
                Agregar
              </Button>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchProductContainer: {
    flex: 0.1,

    backgroundColor: 'red',
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
