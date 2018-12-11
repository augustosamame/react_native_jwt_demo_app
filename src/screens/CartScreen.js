import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as api from '../services/api'
import { Loading, Button } from '../components/common';
import CartItemCardList from '../components/cartItemsScreen/CartItemCardList'

class CartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cartItems: [],
      error: '',
    };
    this.removeActiveCartItem = this.removeActiveCartItem.bind(this)
  }

  componentDidMount() {
    this.getCartItems();
  }

  removeActiveCartItem(cartItem) {

    //TODO improve this to work locally with something like this:
    //const array = this.state.cartItems
    //for (let i = array.length - 1; i >= 0; i--) {
    //if (array[i].id === cartItem) {
    //   array.splice(i, 1);
    //  }
    //}
    //
    //this.setState({
    //  cartItems: array
    //});

    api.destroy(
      '/cart/' + cartItem
    ).then((response) => {
      this.setState({
        cartItems: response.data.data,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  getCartItems() {
    api.get(
      '/carts'
    ).then((response) => {
      this.setState({
        cartItems: response.data.data,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  render() {
    const totalText = 'Productos Seleccionados: ' + this.props.cartProductsCount
    const { container,
            totalTextContainer,
            totalTextStyle,
            cartItemListContainer,
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
          <NavigationEvents
            onWillFocus={() => this.getCartItems()}
          />
          <View style={totalTextContainer}>
          <Text style={totalTextStyle}>
            {totalText}
          </Text>
          </View>
          <View style={styles.containerTitles}>
            <View style={styles.titles}>
              <View style={styles.column1}>
                <Text style={styles.titleText}>Producto(s)</Text>
              </View>
              <View style={styles.column2}>
                <Text style={styles.titleText}>Cantidad</Text>
              </View>
              <View style={styles.column3}>
                <Text style={styles.titleText}>Eliminar</Text>
              </View>
            </View>
          </View>
          <ScrollView style={cartItemListContainer}>
            <CartItemCardList
              removeActiveCartItem={this.removeActiveCartItem}
              cartItems={this.state.cartItems}
            />
          </ScrollView>
          <View style={optionButtonsContainer}>
            <View style={firstButton}>
              <Button style={backButton} onPress={() => { this.props.navigation.navigate('Home'); }} >
              <Ionicons
                name={'ios-arrow-back'}
                size={26}
                style={{ color: '#fff', alignSelf: 'center' }}
              />
              </Button>
          </View>
            <View style={secondButton}>
              <Button onPress={() => this.props.navigation.navigate('chooseObra')} >
                Siguiente
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
  totalTextContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  totalTextStyle: {
    fontSize: 18,
  },
  cartItemListContainer: {
    flex: 0.7,
    marginTop: -20
  },
  optionButtonsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    marginTop: 20,
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
  },
  containerTitles: {
     marginTop: 20,
     justifyContent: 'center',
   },
   titles: {
     justifyContent: 'center',
     flexDirection: 'row',
     marginLeft: 10,
     marginRight: 10,
   },
   titleText: {
     fontSize: 16,
     fontWeight: 'bold',
   },
   column1: {
     flex: 0.4,
     backgroundColor: '#fff',
     padding: 10,
   },
   column2: {
     flex: 0.3,
     backgroundColor: '#fff',
     padding: 10,
     flexDirection: 'row',
     justifyContent: 'center'
   },
   column3: {
     flex: 0.3,
     backgroundColor: '#fff',
     padding: 10,
     flexDirection: 'row',
     justifyContent: 'center'
   },
});

export default withNavigation(CartScreen);
