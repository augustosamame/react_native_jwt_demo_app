import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartItemDetail from './CartItemDetail'

export default class CartItemCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '12/12/2018',
      interval: '8:00 - 10:00am',
      error: '',
    };
  }

  renderCartItems() {
    return this.props.cartItems.map(cartItem => {
              return <CartItemDetail
                        key={cartItem.id}
                        cartItem={cartItem}
                        style={{ marginBottom: 10 }}
                        removeActiveCartItem={this.props.removeActiveCartItem}
                     >
                      {cartItem.attributes.product_name}
                     </CartItemDetail>
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCartItems()}
        <View style={styles.cartOptionsContainer}>
          <Text style={styles.cartOptionsTitle}>Datos de Entrega</Text>
          <View style={styles.dateInput}>
            <Ionicons style={styles.dateIcon} name="ios-calendar" size={40} color="orange"/>
            <TextInput
                style={styles.input}
                selectTextOnFocus={true}
                //style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(date) => this.setState({ date })}
                value={this.state.date}
                underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.dateInput}>
            <Ionicons style={styles.intervalIcon} name="ios-time" size={40} color="orange"/>
            <TextInput
                style={styles.input}
                selectTextOnFocus={true}
                //style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(interval) => this.setState({ interval })}
                value={this.state.interval}
                underlineColorAndroid="transparent"
            />
          </View>
        </View>
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
  cartOptionsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cartOptionsTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  dateInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    backgroundColor: '#fff',
    height: 40,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: 'orange'
  },
  dateIcon: {
      padding: 0,
  },
  intervalIcon: {
      padding: 0,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
      fontSize: 20,
  },

});
