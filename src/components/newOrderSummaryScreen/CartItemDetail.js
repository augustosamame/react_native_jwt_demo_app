import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class CartItemDetail extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <Text>{this.props.cartItem.attributes.product_name}</Text>
        </View>
        <View style={styles.column2}>
          <Text>{this.props.cartItem.attributes.qty
                 + ' '
                 + this.props.cartItem.attributes.product_unit }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    height: 50,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    elevation: 2,
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  column1: {
    flex: 0.5,
    backgroundColor: '#fff',
    paddingTop: 18,
    marginLeft: 10,
  },
  column2: {
    flex: 0.5,
    backgroundColor: '#fff',
    paddingTop: 18,
    flexDirection: 'row',
    justifyContent: 'center'
  },

});
