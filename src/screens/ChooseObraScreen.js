import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import { Loading, Button } from '../components/common';
import ObraDetail from '../components/cartItemsScreen/ObraDetail'
import * as api from '../services/api'

class ChooseObraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      obras: [],
      chosen_obra: '',
      error: '',
    };
  }

  componentDidMount() {
    api.get(
      '/obras'
    ).then((response) => {
      this.setState({
        obras: response.data.data,
        chosen_obra: response.data.data.length === 1 ? '1' : '',
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  renderObras() {
    return this.state.obras.map(obra => {
              return (
                <ObraDetail
                  key={obra.id}
                  obra={obra}
                />
              )
    });
  }

  render() {
    return (
            <View style={styles.container}>
              <Text style={styles.title}>Confirma Tu Obra</Text>
              <ScrollView>
                {this.renderObras()}
              </ScrollView>
              <Button
                style={styles.button}
                onPress={() => this.props.navigation.navigate('ChooseFerreteria')}>
                Enviar
              </Button>
            </View>
    );
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
