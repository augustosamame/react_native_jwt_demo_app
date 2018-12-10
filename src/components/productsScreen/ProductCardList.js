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
              return <ProductDetail key={product.id} product={product} style={{ marginBottom: 10 }}>
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 2,
    position: 'relative',
  },

});
