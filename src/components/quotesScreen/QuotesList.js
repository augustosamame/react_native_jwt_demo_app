import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import QuoteItem from './QuoteItem';

export default class QuotedOrderList extends React.Component {

  renderQuotes() {
    return this.props.quotes.map(quote => {
              return <QuoteItem
                        key={quote.id}
                        quote={quote}
                        style={{ marginBottom: 10 }}
                     >
                     </QuoteItem>
    });
  }

  render() {
    if (this.props.quotes === null) {
      return (
        <View style={styles.container} />
      );
    }
    return (
      <View style={styles.container}>
        {this.renderQuotes()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
  },

});
