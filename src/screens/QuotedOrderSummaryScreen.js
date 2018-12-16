import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as api from '../services/api'
import { Loading, Button } from '../components/common';
import SummaryQuoteList from '../components/quotedOrderSummaryScreen/SummaryQuoteList'

class QuotedOrderSummaryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      loading: true,
    };
  }

  componentDidMount() {
    api.get(
      `/orders/${this.props.navigation.getParam('orderId', '')}/?include=quotes`
    ).then((response) => {
      this.setState({
        order: response.data.data,
        quotes: response.data.included,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  downloadQuotes() {
    console.log('Pressed Download Quotes');
  }


  render() {

    const { container,
            totalTextContainer,
            totalTextStyle,
            quotesListContainer,
            optionButtonsContainer,
            firstButton,
            middleSpace,
            secondButton,
            backButton,
            downloadButton } = styles;

    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    } else {
      return (
        <View style={container}>
          <View style={totalTextContainer}>
          <Text style={totalTextStyle}>
            {`${this.state.order.attributes.chosen_obra  }: ${this.state.order.attributes.delivery_date}`}
          </Text>
          </View>
          <View style={styles.containerTitles}>
            <View style={styles.titles}>
              <View style={styles.column1}>
                <Text style={styles.titleText}>Ferretería</Text>
              </View>
              <View style={styles.column2}>
                <Text style={styles.titleText}>Costo Total</Text>
              </View>
              <View style={styles.column3}>
                <Text style={styles.titleText}>Detalle de Precios</Text>
              </View>
            </View>
          </View>
          <ScrollView style={quotesListContainer}>
            <SummaryQuoteList
              order={this.state.order}
              quotes={this.state.quotes}
            />
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
            <View style={middleSpace} />
            <View style={secondButton}>
              <Button style={downloadButton} onPress={() => { this.downloadQuotes(); }} >
              <Ionicons
                name={'ios-download'}
                size={26}
                style={{ color: '#fff', alignSelf: 'center' }}
              />
              </Button>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  totalTextContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#ccc',
    paddingLeft: 30,
    paddingRight: 30,
  },
  totalTextStyle: {
    fontSize: 18,
  },
  quotesListContainer: {
    flex: 0.7,
    marginTop: -20
  },
  optionButtonsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'stretch'
  },
  firstButton: {
    flex: 0.4,
  },
  middleSpace: {
    flex: 0.2,
  },
  secondButton: {
    flex: 0.4,
    width: 20,
  },
  backButton: {
    flex: 1,
    width: 100,
    height: 100
  },
  downloadButton: {
    flex: 1,
    width: 100,
    height: 100,
  },
  containerTitles: {
     marginTop: 20,
     justifyContent: 'center',
     marginBottom: 20,
   },
   titles: {
     justifyContent: 'center',
     flexDirection: 'row',
     marginLeft: 10,
     marginRight: 10,
   },
   titleText: {
     fontSize: 16,
     fontWeight: 'bold',
   },
   column1: {
     flex: 0.4,
     backgroundColor: '#fff',
     padding: 10,
     alignItems: 'center',
   },
   column2: {
     flex: 0.3,
     backgroundColor: '#fff',
     padding: 10,
     alignItems: 'center',
   },
   column3: {
     flex: 0.3,
     backgroundColor: '#fff',
     padding: 10,
     alignItems: 'center',
   },
});

export default withNavigation(QuotedOrderSummaryScreen);
