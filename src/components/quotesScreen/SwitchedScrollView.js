import React from 'react';
import { ScrollView } from 'react-native';
import NewOrderList from './NewOrderList';
import QuotedOrderList from './QuotedOrderList';
import OrderList from './OrderList';

export default class SwitchedScrollView extends React.Component {

  render() {
    if (this.props.stage === 'stage_new') {
      return (
        <ScrollView>
          <NewOrderList
            orders={this.props.orders.data}
          />
        </ScrollView>
      );
    }

    if (this.props.stage === 'stage_quoted') {
      return (
        <ScrollView>
          <QuotedOrderList
            orders={this.props.orders}
          />
        </ScrollView>
      );
    }

    if (this.props.stage === 'stage_confirmed') {
      return (
        <ScrollView>
        <OrderList
          stage={'stage_confirmed'}
          orders={this.props.orders.data}
        />
        </ScrollView>
      );
    }

    if (this.props.stage === 'stage_delivered') {
      return (
        <ScrollView>
        <OrderList
          stage={'stage_delivered'}
          orders={this.props.orders.data}
        />
        </ScrollView>
      );
    }
  }
}
