import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonForward from '../common/ButtonForward';

class NewOrderDetail extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>
            {this.props.order.attributes.chosen_obra}
          </Text>
        </View>
        <View style={styles.bodyTextContainer}>
          <View style={styles.leftContainer}>
            <Text>{`Productos Seleccionados: ${this.props.order.attributes.num_products}`}</Text>
            <Text>{`Fecha: ${this.props.order.attributes.delivery_date}`}</Text>
            <Text>{`Hora: ${this.props.order.attributes.delivery_interval}`}</Text>
          </View>
          <View style={styles.rightContainer}>

              <ButtonForward
                style={styles.forwardButton}
                onPress={() => { this.props.navigation.navigate('NewOrderSummary', { orderId: this.props.order.id }); }}
              >
                <Ionicons
                  name={'ios-arrow-forward'}
                  size={30}
                  style={{ color: '#fff', alignSelf: 'center' }}
                />
              </ButtonForward>
            </View>

        </View>
      </View>
    );
  }
}

export default withNavigation(NewOrderDetail);

const styles = StyleSheet.create({
 container: {
    height: 90,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  titleTextContainer: {
    flex: 0.3,
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 5,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bodyTextContainer: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  leftContainer: {
    flex: 0.7,
    marginLeft: 10,
  },
  rightContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
