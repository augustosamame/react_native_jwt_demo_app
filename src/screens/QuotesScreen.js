import React from 'react';
import { View, StyleSheet } from 'react-native';
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
    this.handleChooseStage('stage_new');
  }

  handleChooseStage(chosenStage) {
    api.get(
      `/orders?stage=${chosenStage}`
    ).then((response) => {
      this.setState({
        orders: response.data.data,
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

    console.log(this.state.stage);

    if (this.state.loading) {
      return (
        <Loading size={'large'} />
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
});
