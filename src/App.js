import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomerList from './containers/CustomerList/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => (
  <View style={styles.container}>
    <CustomerList />
  </View>
);

export default App;
