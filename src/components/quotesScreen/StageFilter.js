import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './common/Button';

export default class StageFilter extends React.Component {

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          active={this.props.stage === 'stage_new'}
          onPress={() => this.props.handleChooseStage('stage_new')}
        >
        Enviado
        </Button>
        <Button
          active={this.props.stage === 'stage_quoted'}
          onPress={() => this.props.handleChooseStage('stage_quoted')}
        >
        Cotizado
        </Button>
        <Button
          active={this.props.stage === 'stage_confirmed'}
          onPress={() => this.props.handleChooseStage('stage_confirmed')}
        >
        Confirmado
        </Button>
        <Button
          active={this.props.stage === 'stage_delivered'}
          onPress={() => this.props.handleChooseStage('stage_delivered')}
        >
        Despachado
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flex: 0.9,
  },
});
