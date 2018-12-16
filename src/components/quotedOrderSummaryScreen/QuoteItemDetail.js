import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class SummaryQuoteDetail extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <Text>{this.props.cartItem.product_name}</Text>
        </View>
        <View style={styles.column2}>
          <Text>{this.props.cartItem.qty}</Text>
        </View>
        <View style={styles.column3}>
          <Text>{this.props.cartItem.price}</Text>
        </View>
        <View style={styles.column4}>
          <Text>{this.props.cartItem.total}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    height: 32,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
    elevation: 2,
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  column1: {
    flex: 0.4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginLeft: 10,
  },
  column2: {
    flex: 0.2,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  column3: {
    flex: 0.2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  column4: {
    flex: 0.2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

});
