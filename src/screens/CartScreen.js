import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as api from '../services/api';
import { Loading, Button } from '../components/common';
import CartItemCardList from '../components/cartItemsScreen/CartItemCardList';

class CartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      entregaDate: '11/12/2018',
      entregaInterval: '8:00 - 10:00am',
      error: '',
    };
    this.removeActiveCartItem = this.removeActiveCartItem.bind(this);
    this.handleIntervalChange = this.handleIntervalChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    this.props.getCartItems();
    this.setState({ loading: false });
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
      `/carts/${cartItem}`
    ).then(() => {
      this.setState({
        loading: false
      });
      this.props.getBubblesCount();
      this.props.getCartItems();
    }).catch(() => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  handleIntervalChange(interval) {
    this.setState({ entregaInterval: interval });
  }

  handleDateChange(date) {
    this.setState({ entregaDate: date });
  }

  render() {
    const totalText = `Productos Seleccionados: ${this.props.cartProductsCount}`;
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
    }
    if (this.props.cartItems.length === 0) {
      return (
        <View style={container}>
          <NavigationEvents
            onWillFocus={() => this.props.getCartItems()}
          />
          <View style={totalTextContainer}>
            <Text style={totalTextStyle}>
              Su carrito está vacío
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View style={container}>
        <NavigationEvents
          onWillFocus={() => this.props.getCartItems()}
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
            entregaDate={this.state.entregaDate}
            entregaInterval={this.state.entregaInterval}
            removeActiveCartItem={this.removeActiveCartItem}
            handleIntervalChange={this.handleIntervalChange}
            handleDateChange={this.handleDateChange}
            cartItems={this.props.cartItems}
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
            <Button
              onPress={() => this.props.navigation.navigate(
              'ChooseObra',
              { chosenDate: this.state.entregaDate, chosenInterval: this.state.entregaInterval }
            )}
            >
              Siguiente
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
