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
        let selectedButton = this.props.obras.find(e => e.selected === true);
        selectedButton = selectedButton ? selectedButton.value : this.props.obras[0].value
        return (
            <View style={styles.container}>
                <Text style={styles.valueText}>
                    Value = {selectedButton}
                </Text>
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
