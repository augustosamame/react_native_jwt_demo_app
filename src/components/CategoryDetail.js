import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';

class CategoryDetail extends React.Component {

  render() {
    const pic = { uri: this.props.category.attributes.image.large.url };
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Product', { productCategory: this.props.category.attributes.name })}>
      <View style={styles.viewContainer}>
        <ImageBackground source={pic} style={styles.imgContainer}>
          <Text style={styles.titleText}>
            {this.props.category.attributes.name}
          </Text>
        </ImageBackground>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 0.25,
    backgroundColor: 'transparent',
  },
 imgContainer: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
  },
  titleText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

export default withNavigation(CategoryDetail);
