import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { QuoteButton } from '../components/common';
import QuoteItemList from '../components/quotedOrderSummaryScreen/QuoteItemList';

class QuotedSummaryQuoteDetailScreen extends React.Component {

  downloadQuotes() {
    console.log('Pressed Download Quotes');
  }

  confirmQuote() {
    console.log('Pressed Confirm Quote');
  }

  render() {
    const { container,
            quotesListContainer,
            footerContainer,
            totalsContainer,
            firstLine,
            secondLine,
            thirdLine,
            optionButtonsContainer,
            firstButtonContainer,
            middleButtonContainer,
            secondButtonContainer,
            backButton,
            confirmButton,
            downloadButton } = styles;
    const quote = this.props.navigation.getParam('quote', []);

    return (
      <View style={container}>
        <View style={styles.containerTitles}>
          <View style={styles.titles}>
            <View style={styles.column1}>
              <Text style={styles.titleText}>Producto(s)</Text>
            </View>
            <View style={styles.column2}>
              <Text style={styles.titleText}>Cant</Text>
            </View>
            <View style={styles.column3}>
              <Text style={styles.titleText}>P(u)</Text>
            </View>
            <View style={styles.column4}>
              <Text style={styles.titleText}>Total</Text>
            </View>
          </View>
        </View>
        <ScrollView style={quotesListContainer}>
          <QuoteItemList
            quote={quote}
          />
        </ScrollView>
        <View style={footerContainer}>
          <View style={totalsContainer}>
            <Text>* Costo incluye IGV</Text>
            <View style={firstLine}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Costo Total</Text>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{quote.attributes.price}</Text>
            </View>
            <View style={secondLine}>
              <Text style={{ fontWeight: 'bold' }}>Descuento</Text>
              <Text style={{ fontWeight: 'bold' }}>{quote.attributes.discount}</Text>
            </View>
            <View style={thirdLine}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Costo Total</Text>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{quote.attributes.total}</Text>
            </View>
          </View>
          <View style={optionButtonsContainer}>
            <View style={firstButtonContainer}>
              <QuoteButton style={backButton} onPress={() => { this.props.navigation.goBack(); }} >
              <Ionicons
                name={'ios-arrow-back'}
                size={26}
                style={{ color: '#fff', alignSelf: 'center' }}
              />
              </QuoteButton>
            </View>
            <View style={middleButtonContainer}>
              <QuoteButton style={confirmButton} onPress={() => { this.confirmQuote(); }} >
              <Text>Confirmar Pedido</Text>
              </QuoteButton>
            </View>
            <View style={secondButtonContainer}>
              <QuoteButton style={downloadButton} onPress={() => { this.downloadQuotes(); }} >
              <Ionicons
                name={'ios-download'}
                size={26}
                style={{ color: '#fff', alignSelf: 'center' }}
              />
              </QuoteButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(QuotedSummaryQuoteDetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quotesListContainer: {
    flex: 1,
    marginTop: -20
  },
  footerContainer: {
    flex: 1,
  },
  totalsContainer: {
    marginLeft: 20,
  },
  firstLine: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 0,
    marginRight: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  secondLine: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 0,
    marginRight: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  thirdLine: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 0,
    marginRight: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  optionButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  firstButtonContainer: {
    flex: 0.2,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  middleButtonContainer: {
    flex: 0.6,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  secondButtonContainer: {
    flex: 0.2,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  backButton: {
    flex: 1,
  },
  downloadButton: {
    flex: 1,
  },
  confirmButton: {
    flex: 1,
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
   flex: 0.2,
   backgroundColor: '#fff',
   padding: 10,
   alignItems: 'center',
 },
 column3: {
   flex: 0.2,
   backgroundColor: '#fff',
   padding: 10,
   alignItems: 'center',
 },
 column4: {
   flex: 0.2,
   backgroundColor: '#fff',
   padding: 10,
   alignItems: 'center',
 },
});
