import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';
import { Loading, Button } from '../components/common';
import ObraDetail from '../components/cartItemsScreen/ObraDetail'
import RadioButtons from '../components/common/RadioButtons'
import * as api from '../services/api'

class ChooseObraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      chosen_obra: '',
      error: '',
      obras: [],
    };
    this.choseRadioButton = this.choseRadioButton.bind(this)
  }

  componentDidMount() {
    api.get(
      '/obras'
    ).then((response) => {
        const myarray = response.data.data.map((eachObra) => {
          return ({
            label: eachObra.attributes.name,
            value: eachObra.id,
            selected: false,
            disabled: false,
            layout: 'row',
            color: '#444',
            size: 24
          }
          );
        }
      );
      this.setState({
        obras: myarray,
        loading: false,
      });
      this.setState({
        chosen_obra: this.state.obras[0].value
      })
      //this.onPress();
      }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  choseRadioButton(myobras) {
    this.setState(
      { obras: myobras,
        chosen_obra: myobras.find(e => e.selected === true).value
      }
    );
  }

  renderObras() {
    return this.state.new_obras.map(obra => {
              return (
                <ObraDetail
                  key={obra.id}
                  obra={obra}
                />
              );
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    } else {
      return (
              <View style={styles.container}>
                <Text style={styles.title}>Confirma Tu Obra</Text>
                <ScrollView>
                  <RadioButtons
                    obras={this.state.obras}
                    choseRadioButton={this.choseRadioButton}
                  />
                </ScrollView>
                <Button
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate(
                            'ChooseFerreteria',
                            { chosenObra: this.state.chosen_obra,
                              chosenDate: this.props.navigation.getParam('chosenDate', ''),
                              chosenInterval: this.props.navigation.getParam('chosenInterval', '')
                             }
                          )}
                >
                  Enviar
                </Button>
              </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '30%',
  },
  title: {
    flex: 0.2,
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 10
  },
  button: {

  },
});

export default withNavigation(ChooseObraScreen);
