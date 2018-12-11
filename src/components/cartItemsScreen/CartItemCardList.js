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
          <View style={styles.optionInput}>
            <Ionicons style={styles.dateIcon} name="ios-calendar" size={40} color="white"/>
            <TextInput
                style={styles.input}
                selectTextOnFocus={true}
                //style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(date) => this.setState({ date })}
                value={this.state.date}
                underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.optionInput}>
            <Ionicons style={styles.intervalIcon} name="ios-time" size={40} color="white"/>
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
  optionInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    backgroundColor: 'orange',
    height: 40,
    marginBottom: 10
  },
  dateIcon: {
      paddingLeft: 5,
      paddingRight: 5,
  },
  intervalIcon: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  input: {
      flex: 1,
      padding: 10,
      paddingLeft: 30,
      backgroundColor: '#ccc',
      color: '#424242',
      fontSize: 20,
  },

});
