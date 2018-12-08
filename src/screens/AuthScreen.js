import React, { Component } from 'react';
import { View } from 'react-native';
import { Login, Registration } from '../components';

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
      return (
        <Registration newJWT={this.props.setToken} formSwitch={this.formSwitch} />
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
    alignItems: 'center'
  },
};
