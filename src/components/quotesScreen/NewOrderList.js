import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import NewOrderDetail from './NewOrderDetail'

export default class NewOrderList extends React.Component {

  renderNewOrders() {
    return this.props.orders.map(order => {
              return <NewOrderDetail
                        key={order.id}
                        order={order}
                        style={{ marginBottom: 10 }}
                     >
                      {order.attributes.name}
                     </NewOrderDetail>
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderNewOrders()}
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
