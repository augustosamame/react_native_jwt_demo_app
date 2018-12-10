import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';
import ProductDetail from './ProductDetail'

export default class ProductCardList extends React.Component {

  renderProducts() {
    return this.props.products.map(product => {
              return <ProductDetail key={product.id} product={product}>
                        {product.attributes.name}
                      </ProductDetail>
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderProducts()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    alignSelf: 'stretch',
    marginTop: 20,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    elevation: 2,
    position: 'relative',
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
