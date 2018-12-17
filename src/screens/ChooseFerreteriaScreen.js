import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Loading, Button } from '../components/common';
import * as api from '../services/api';
import FerreteriaCardList from '../components/cartItemsScreen/FerreteriaCardList';

class ChooseFerreteriaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ferreterias: [],
      chosen_ferreterias: [],
      loading: true,
    };
    this.toggleChoseFerreteria.bind(this);
  }

  componentDidMount() {
    api.get(
      '/ferreterias'
    ).then((response) => {
      this.setState({
        ferreterias: response.data.data,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: `Error retrieving data: ${error}`,
        loading: false
      });
    });
  }

  toggleChoseFerreteria = (toggledFerreteria, selected) => {
    let array = this.state.chosen_ferreterias;
    if (selected) {
      array.push(toggledFerreteria);
      this.setState({
        chosen_ferreterias: array
      });
    } else {
        const index = array.indexOf(toggledFerreteria);
        array.splice(index)
      this.setState({
        chosen_ferreterias: array
      });
    }
  }

  sendCart = () => {
    api.post(
      '/checkout',
      {
        chosenObra: this.props.navigation.getParam('chosenObra', ''),
        chosen_ferreterias: this.state.chosen_ferreterias,
        chosenDate: this.props.navigation.getParam('chosenDate', ''),
        chosenInterval: this.props.navigation.getParam('chosenInterval', '')
      }
    ).then((response) => {
      this.setState({
        loading: false
      });
      this.props.getBubblesCount();
      this.props.getCartItems();
      this.props.navigation.navigate('ConfirmCart')
    }).catch((error) => {
      this.setState({
        error: `Error sending data: ${error}`,
        loading: false
      });
    });
  }

  render() {
    const { container,
            searchFerreteriaContainer,
            ferreteriaListContainer,
            optionButtonsContainer,
            firstButton,
            secondButton,
            backButton } = styles;
    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    }
    return (
      <View style={container}>
        <View style={searchFerreteriaContainer}>
        <SearchBar
          round
          onChangeText={this.incrementalSearchFerreterias}
          onClear={this.clearSearchFerreterias}
          placeholder='Buscar por Distrito'
          inputContainerStyle={{ backgroundColor: '#fff' }}
        />
        </View>
        <ScrollView style={ferreteriaListContainer}>
          <FerreteriaCardList
            ferreterias={this.state.ferreterias}
            toggleChoseFerreteria={this.toggleChoseFerreteria}
          />
        </ScrollView>
        <View style={optionButtonsContainer}>
          <View style={firstButton}>
            <Button style={backButton} onPress={() => { this.props.navigation.goBack(); }} >
            <Ionicons
              name={'ios-arrow-back'}
              size={26}
              style={{ color: '#fff', alignSelf: 'center' }}
            />
            </Button>
        </View>
          <View style={secondButton}>
            <Button onPress={() => this.sendCart()} >
              Enviar
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchFerreteriaContainer: {
    flex: 0.1,

    backgroundColor: 'red',
  },
  ferreteriaListContainer: {
    flex: 0.7,
  },
  optionButtonsContainer: {
    flex: 0.2,
    flexDirection: 'row',

    alignItems: 'stretch'
  },
  firstButton: {
    flex: 0.4,
  },
  secondButton: {
    flex: 0.6,
  },
  backButton: {
    flex: 1,
    width: 100,
    height: 100
  }
});

export default withNavigation(ChooseFerreteriaScreen);
