import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import ButtonForward from '../common/ButtonForward';

class SummaryQuoteDetail extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <Text>{this.props.quote.attributes.ferreteria_name}</Text>
        </View>
        <View style={styles.column2}>
          <Text>{this.props.quote.attributes.price}</Text>
        </View>
        <View style={styles.column3}>
          <ButtonForward
            style={styles.forwardButton}
            onPress={() => { this.props.navigation.navigate('QuotedSummaryQuoteDetail', { quote: this.props.quote }); }}
          >
            <Ionicons
              name={'ios-arrow-forward'}
              size={30}
              style={{ color: '#fff', alignSelf: 'center' }}
            />
          </ButtonForward>
        </View>
      </View>
    );
  }
}

export default withNavigation(SummaryQuoteDetail);

const styles = StyleSheet.create({
 container: {
    height: 32,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 2,
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  column1: {
    flex: 0.4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  column2: {
    flex: 0.3,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  column3: {
    flex: 0.3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

});
