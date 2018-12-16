import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QuoteItemDetail from './QuoteItemDetail'

export default class QuoteItemList extends React.Component {

  renderQuotes() {
    return this.props.quote.attributes.cart_prices.map(cartItem => {
              return <QuoteItemDetail
                        key={cartItem.id}
                        cartItem={cartItem}
                        style={{ marginBottom: 10 }}
                     />
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderQuotes()}
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
