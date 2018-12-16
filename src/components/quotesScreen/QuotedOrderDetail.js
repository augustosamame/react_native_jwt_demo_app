import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as api from '../../services/api'
import { Loading } from '../common';
import ButtonForward from '../common/ButtonForward';
import QuotesList from './QuotesList'

class QuotedOrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      quotes: [],
      error: '',
    };
  }

  componentDidMount() {
    console.log(this.props.order.id, "==> ORDER_ID");
    api.get(
      `/quotes_index_maestro?order=${this.props.order.id}&stage=stage_quoted`
    ).then((response) => {
      this.setState({
        quotes: response.data.data,
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

    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    }
    console.log(this.state.quotes, "==> QUOTES AS STATE IN DETAIL");

    return (
      <View style={styles.container}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>
            {this.props.order.attributes.chosen_obra}
          </Text>
        </View>
        <View style={styles.bodyTextContainer}>
          <View style={styles.leftContainer}>
            <QuotesList
              quotes={this.state.quotes}
            />
          </View>
          <View style={styles.rightContainer}>

              <ButtonForward
                style={styles.forwardButton}
                onPress={() => { this.props.navigation.navigate('QuotedOrderSummary', { orderId: this.props.order.id }); }}
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

export default withNavigation(QuotedOrderDetail);

const styles = StyleSheet.create({
 container: {
    height: 90,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    marginBottom: 40,
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
