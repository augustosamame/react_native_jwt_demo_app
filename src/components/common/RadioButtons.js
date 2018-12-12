import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: '',
    };
    }

    onPress = data => this.props.choseRadioButton(data)

    render() {
        return (
            <View style={styles.container}>
                <RadioGroup
                  radioButtons={this.props.obras}
                  onPress={this.onPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    valueText: {
        fontSize: 18,
        marginBottom: 50,
    },
});
