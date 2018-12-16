import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import QuotedOrderDetail from './QuotedOrderDetail'

export default class QuotedOrderList extends React.Component {

  renderQuotedOrders() {
    return this.props.orders.data.map(order => {
              return <QuotedOrderDetail
                        key={order.id}
                        order={order}
                        style={{ marginBottom: 10 }}
                     >
                     </QuotedOrderDetail>
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderQuotedOrders()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent: 'center',
  },

});
