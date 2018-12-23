import React, { Component } from 'react';
import { View } from 'react-native';
import { USER_TYPE } from '../config'
import { Login, MaestroRegistration, FerreteroRegistration } from '../components';

export default class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true
    };
    this.whichForm = this.whichForm.bind(this);
    this.formSwitch = this.formSwitch.bind(this);
  }

  formSwitch() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  whichForm() {
    if (!this.state.showLogin) {
      if (USER_TYPE === 'maestro') {
        return (
          <MaestroRegistration newJWT={this.props.setToken} formSwitch={this.formSwitch} />
        );
      }
      return (
        <FerreteroRegistration newJWT={this.props.setToken} formSwitch={this.formSwitch} />
      );
    } else {
      return (
        <Login newJWT={this.props.setToken} formSwitch={this.formSwitch}/>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.whichForm()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',

  },
};
