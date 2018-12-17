import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as api from '../../services/api';
import { DetalleButton, CallButton } from '../common';

class OrderDetail extends React.Component {

  makeCall(phoneNumber) {
    console.log('clicked Make Call');
    const url = `tel:+${phoneNumber}`;
    Linking.openURL(url);
  }

  redirectToCommonScreen() {
    api.get(
      `/quotes/${this.props.order.attributes.accepted_quote.id}`
    ).then((response) => {
      this.props.navigation.navigate('CommonSummaryQuoteDetail', { quote: response.data.data, quotedScreen: false });
    }).catch((error) => {
      console.log(error);
    });
  }

  renderCallButton() {
    if (this.props.stage === 'stage_confirmed') {
      return (
        <CallButton
          style={styles.callButton}
          onPress={() => {
            this.makeCall(this.props.order.attributes.selected_ferreteria_phone);
          }}
        >
          <Ionicons
            name={'ios-call'}
            size={30}
            style={{ color: '#fff', alignSelf: 'center' }}
          />
        </CallButton>
      );
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.titleLinesContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>
                {`Obra: ${this.props.order.attributes.chosen_obra}`}
              </Text>
            </View>
            <View style={styles.subtitleTextContainer}>
              <Text style={styles.subtitleText}>
                {`Ferretería: ${this.props.order.attributes.selected_ferreteria}`}
              </Text>
            </View>
          </View>
          <View style={styles.callButtonContainer}>
            {this.renderCallButton()}
          </View>
        </View>
        <View style={styles.bodyTextContainer}>
          <View style={styles.leftContainer}>
            <Text>{`Productos Seleccionados: ${this.props.order.attributes.num_products}`}</Text>
            <Text>{`Fecha de entrega: ${this.props.order.attributes.delivery_date}`}</Text>
            <Text>{`Hora de entrega: ${this.props.order.attributes.delivery_interval}`}</Text>
            <DetalleButton
              onPress={() => { this.redirectToCommonScreen(); }}
            >
            Ver Detalle
            </DetalleButton>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(OrderDetail);

const styles = StyleSheet.create({
 container: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  titleLinesContainer: {
    flex: 0.7,
  },
  callButtonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextContainer: {
    backgroundColor: '#ccc',
    //flex: 0.3,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
  },
  subtitleTextContainer: {
    backgroundColor: 'orange',
    //flex: 0.3,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    marginBottom: 5,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bodyTextContainer: {
    //flex: 0.7,
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
  callButton: {

  },

});
