import React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';

export default class CategoryDetail extends React.Component {

  render() {
    let pic = { uri: this.props.category.attributes.image.large.url };
    console.log({pic});
    return (
      <View style={ styles.viewContainer }>
        <ImageBackground source={pic} style={styles.imgContainer}>
          <Text style={styles.titleText}>{this.props.category.attributes.name}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 0.25,
  },
 imgContainer: {
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
