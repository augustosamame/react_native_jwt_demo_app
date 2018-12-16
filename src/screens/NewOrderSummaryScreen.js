import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as api from '../services/api'
import { Loading, Button } from '../components/common';
import CartItemList from '../components/newOrderSummaryScreen/CartItemList'

class NewOrderSummaryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      loading: true,
    };
  }

  componentDidMount() {
    api.get(
      `/orders/${this.props.navigation.getParam('orderId', '')}`
    ).then((response) => {
      this.setState({
        order: response.data.data,
        cartItems: response.data.included,
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

    const { container,
            totalTextContainer,
            totalTextStyle,
            cartItemListContainer,
            optionButtonsContainer,
            firstButton,
            backButton } = styles;

    console.log('FIRED RENDER OF NEW ORDER SUMMARY SCREEN WITH CART ITEMS =>', this.state.order)

    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    } else {
      const totalText = 'Productos Seleccionados: ' + this.state.order.attributes.num_products
      return (
        <View style={container}>
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
            </View>
          </View>
          <ScrollView style={cartItemListContainer}>
            <CartItemList
              order={this.state.order}
              cartItems={this.state.cartItems}
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
     marginBottom: 20,
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
     flex: 0.5,
     backgroundColor: '#fff',
     padding: 10,
     alignItems: 'center',
   },
   column2: {
     flex: 0.5,
     backgroundColor: '#fff',
     padding: 10,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
   },
});

export default withNavigation(NewOrderSummaryScreen);
