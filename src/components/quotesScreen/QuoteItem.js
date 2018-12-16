import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class QuoteItem extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Ferreteria: {this.props.quote.attributes.ferreteria_name}
        </Text>
      </View>
    );
  }
}

export default withNavigation(QuoteItem);

const styles = StyleSheet.create({
 container: {
    marginBottom: 5,
  },
  titleText: {
    fontSize: 14,
  },
});
