import React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';

export default class CategoryDetail extends React.Component {

  render() {
    let pic = { uri: this.props.image };
    console.log({pic});
    return (
      <View>
        <ImageBackground source={pic} style={styles.imgContainer}>
          <Text style={styles.titleText}>{this.props.name}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 imgContainer: {
    height: 150,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: "#fff",
    fontSize: 40,
  }
});
