import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image
} from 'react-native';

export default class ProductDetail extends React.Component {

  render() {
    const pic = { uri: this.props.product.attributes.image.thumb.url }
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.image}/>
        </View>
        <View style={styles.TextContainer}>
          <Text>{this.props.product.attributes.name}</Text>
          <Text>{this.props.product.attributes.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    height: 90,
    alignSelf: 'stretch',
    marginTop: 10,
    backgroundColor: '#fff',
    elevation: 2,
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 0.3,
    backgroundColor: '#ddd',
    padding: 10
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
  },
  TextContainer: {
    flex: 0.7,
    backgroundColor: '#ddd',
    padding: 10
  },
  headerText: {
    fontWeight: 'bold',
  },

});
