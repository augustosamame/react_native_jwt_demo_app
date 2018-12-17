import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import OrderDetail from './OrderDetail'

export default class OrderList extends React.Component {

  renderOrders() {
    return this.props.orders.map(order => {
              return <OrderDetail
                        key={order.id}
                        order={order}
                        style={{ marginBottom: 10 }}
                        stage={this.props.stage}
                     >
                      {order.attributes.name}
                     </OrderDetail>
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderOrders()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    justifyContent: 'center',
  },

});
