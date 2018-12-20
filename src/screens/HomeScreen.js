import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import CategoryList from '../components/CategoryList';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      notifications: [],
      error: ''
    };
  }

  componentDidMount() {
    if (this.props.obrasCount === 0) {
      
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CategoryList
          style={{ justifyContent: 'space-evenly' }}
        />
      </View>
    );
  }
}

export default withNavigation(HomeScreen);
