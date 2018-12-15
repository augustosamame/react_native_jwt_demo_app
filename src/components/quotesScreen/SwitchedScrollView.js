import React from 'react';
import { ScrollView, Button, Text } from 'react-native';
import {  } from '../common';
import NewOrderList from './NewOrderList'

export default class SwitchedScrollView extends React.Component {

  render() {
    if (this.props.stage === 'stage_new') {
      return (
        <ScrollView>
          <NewOrderList
            orders={this.props.orders}
          />
        </ScrollView>
      );
    }

    if (this.props.stage === 'stage_quoted') {
      return (
        <ScrollView>
          <Text>Quoted</Text>
        </ScrollView>
      );
    }

    if (this.props.stage === 'stage_confirmed') {
      return (
        <ScrollView>
          <Text>Confirmed</Text>
        </ScrollView>
      );
    }

    if (this.props.stage === 'stage_delivered') {
      return (
        <ScrollView>
          <Text>Delivered</Text>
        </ScrollView>
      );
    }

  }
}
