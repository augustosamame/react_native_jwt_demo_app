import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import * as api from '../services/api'
import { Loading, Button } from '../components/common';
import StageFilter from '../components/quotesScreen/StageFilter'
import SwitchedScrollView from '../components/quotesScreen/SwitchedScrollView'

export default class QuotesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      orders: [],
      stage: '',
      error: '',
    };
    this.handleChooseStage = this.handleChooseStage.bind(this)
  }

  componentDidMount() {
    this.handleChooseStage('stage_quoted');
  }

  handleChooseStage(chosenStage) {
    api.get(
      `/orders?stage=${chosenStage}`
    ).then((response) => {
      this.setState({
        orders: response.data,
        stage: chosenStage,
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

    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    }

    if (this.state.orders.length === 0) {
      return (
        <View style={styles.container}>
          <NavigationEvents
            onWillFocus={() => this.handleChooseStage(this.state.stage)}
          />
          <View style={styles.stageContainer}>
            <StageFilter
              stage={this.state.stage}
              handleChooseStage={this.handleChooseStage}
            />
          </View>
          <View style={styles.noOrdersContainer}>
            <Text style={{ fontSize: 16 }}>No tiene cotizaciones en estado Enviadas</Text>
          </View>
        </View>
       );
    }

      return (
        <View style={styles.container}>
          <NavigationEvents
            onWillFocus={() => this.handleChooseStage(this.state.stage)}
          />
          <View style={styles.stageContainer}>
            <StageFilter
              stage={this.state.stage}
              handleChooseStage={this.handleChooseStage}
            />
          </View>
          <View style={styles.scrollViewContainer}>
            <SwitchedScrollView
              stage={this.state.stage}
              orders={this.state.orders}
            >
            />
            </SwitchedScrollView>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stageContainer: {
    flex: 0.1,
    backgroundColor: 'orange',
  },
  scrollViewContainer: {
    flex: 0.9,
    backgroundColor: '#fff',
  },
  noOrdersContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 10,
  },
});
