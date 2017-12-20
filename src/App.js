import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomerList from './components/CustomerList/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const customers = [
  {
    name: 'Mauricio',
    lastName: 'Coelho',
    address: '7889 West Tunnel Apt. 676 South Sherman, AK 16549',
    latestVisit: '1h',
  },
  {
    name: 'João',
    lastName: 'Silva',
    address: 'South Sherman',
    latestVisit: '2h',
  },
];

const App = () => (
  <View style={styles.container}>
    <CustomerList customers={customers} />
  </View>
);

export default App;
