import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { CheckBox, SearchBar } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Loading, Button } from '../components/common';
import * as api from '../services/api'

class ChooseFerreteriaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ferreterias: [],
      chosen_ferreterias: [],
    };
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
        error: 'Error retrieving data',
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
    return (
      <View style={container}>
        <View style={searchFerreteriaContainer}>
        <SearchBar
          round
          onChangeText={this.incrementalSearchFerreterias}
          onClear={this.clearSearchFerreterias}
          placeholder='Busca por Distrito'
          inputContainerStyle={{ backgroundColor: '#fff' }}
        />
        </View>
        <ScrollView style={ferreteriaListContainer}>

          <Text>Aquí va la lista de Ferreterias</Text>
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
            <Button onPress={() => this.props.navigation.navigate('ConfirmCart')} >
              Agregar
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
