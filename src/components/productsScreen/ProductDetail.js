import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '0',
    };
  }

  changedInput = (text) => {
                            this.setState(text)
                            this.props.updateOrderedProducts([this.props.product.id, text.text])
                           }


  render() {
    const pic = { uri: this.props.product.attributes.image.thumb.url }
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.image}/>
        </View>
        <View style={styles.textContainer}>
          <Text>{this.props.product.attributes.name}</Text>
          <Text>{this.props.product.attributes.description}</Text>
        </View>
        <View style={styles.inputContainer}>

          <View style={styles.spinnerSection}>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                selectTextOnFocus={true}
                //style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                //onChangeText={(text) => this.setState({ text })}
                //onEndEditing = {(text) => this.props.updateOrderedProducts([this.props.product.id, this.state.text])}
                onChangeText={(text) => this.changedInput({ text })}
                value={this.state.text}
                underlineColorAndroid="transparent"
            />
            <Ionicons style={styles.spinnerIcon} name="ios-swap" size={20} color="#000"/>
          </View>

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
  textContainer: {
    flex: 0.4,
    backgroundColor: '#ddd',
    padding: 10
  },
  inputContainer: {
    flex: 0.3,
    justifyContent: 'center',
    backgroundColor: '#ddd',
    //padding: 0,
    paddingRight: 10
  },
  headerText: {
    fontWeight: 'bold',
  },
  spinnerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    paddingLeft: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'orange'
  },
  spinnerIcon: {
      padding: 10,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
      fontSize: 20,
  },

});
