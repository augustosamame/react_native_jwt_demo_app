import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SummaryQuoteDetail from './SummaryQuoteDetail'

export default class SummaryQuoteList extends React.Component {

  renderQuotes() {
    return this.props.quotes.map(quote => {
              return <SummaryQuoteDetail
                        key={quote.id}
                        quote={quote}
                        style={{ marginBottom: 10 }}
                     />
    });
  }

  render() {
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
    marginTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 2,
    position: 'relative',
  },
});
