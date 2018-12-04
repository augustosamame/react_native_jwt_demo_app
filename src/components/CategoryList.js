import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import axios from 'axios';
import CategoryDetail from './CategoryDetail';

export default class CategoryList extends React.Component {

  state = { categories: [] };

  componentWillMount() {
    axios.get('http://localhost:3000/categories')
    .then(response => this.setState({ categories: response.data.data }))
  }

  renderCategories() {
    return this.state.categories.map (category => <CategoryDetail
                                                    key={category.id}
                                                    category={category}
                                                  />
                                      );
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        {this.renderCategories()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'space-between',
  }
});
