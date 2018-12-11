import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import { CheckBox } from 'react-native-elements'

class ObraDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
            <View style={styles.container}>
                <View style={styles.element}>
                  <CheckBox
                    checkedColor='black'
                    uncheckedColor='black'
                    checked={this.state.checked}
                    onPress={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text  style={styles.name}>{this.props.obra.attributes.name}</Text>
                </View>
            </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  element: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    paddingTop: 20,
  }
});

export default ObraDetail;
