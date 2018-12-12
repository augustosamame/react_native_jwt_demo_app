import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FerreteriaDetail from './FerreteriaDetail'

export default class FerreteriaCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  renderFerreterias() {
    return this.props.ferreterias.map(ferreteria => {
              return (
                <FerreteriaDetail
                  key={ferreteria.id}
                  ferreteria={ferreteria}
                  toggleChoseFerreteria={this.props.toggleChoseFerreteria}
                />
              );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderFerreterias()}
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
  cartOptionsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cartOptionsTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  optionInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    backgroundColor: 'orange',
    height: 40,
    marginBottom: 10
  },
  dateIcon: {
      paddingLeft: 5,
      paddingRight: 5,
  },
  intervalIcon: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  input: {
      flex: 1,
      padding: 10,
      paddingLeft: 30,
      backgroundColor: '#ccc',
      color: '#424242',
      fontSize: 20,
  },

});
