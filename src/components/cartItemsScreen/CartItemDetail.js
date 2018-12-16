import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements'

export default class CartItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
  }

  changedInput = () => {
                        this.setState({ checked: false })
                        this.props.removeActiveCartItem(this.props.cartItem.id)
                       }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <Text>{this.props.cartItem.attributes.product_name}</Text>
        </View>
        <View style={styles.column2}>
          <Text>{this.props.cartItem.attributes.qty
                 + ' '
                 + this.props.cartItem.attributes.product_unit }</Text>
        </View>
        <View style={styles.column3}>
          <CheckBox
            checkedColor='black'
            uncheckedColor='black'
            checked={this.state.checked}
            onPress={() => this.changedInput()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    height: 50,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    elevation: 2,
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  column1: {
    flex: 0.4,
    backgroundColor: '#fff',
    paddingTop: 18,
    marginLeft: 10,
  },
  column2: {
    flex: 0.3,
    backgroundColor: '#fff',
    paddingTop: 18,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  column3: {
    flex: 0.3,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center'
  },

});
