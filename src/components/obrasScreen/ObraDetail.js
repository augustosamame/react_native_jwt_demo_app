import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import { EditObraButton } from '../common'

class ObraDetail extends React.Component {

  render() {
    return (
            <View style={styles.container}>
                <View style={styles.element}>
                <Ionicons style={styles.obraIcon} name="ios-home" size={25} color="black"/>
                <Text style={styles.name}>{`Obra ${this.props.obra.attributes.name}`}</Text>
                  <EditObraButton
                    onPress={() => this.props.navigation.navigate('EditObra', {obraId: this.props.obra.id })}
                  />
                </View>
            </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 40,
    marginRight: 40,
  },
  obraIcon: {
    marginTop: 15,
    marginRight: 5,
  },
  element: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  name: {
    paddingTop: 20,
  }
});

export default withNavigation(ObraDetail);
