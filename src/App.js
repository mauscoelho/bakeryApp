import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomerCard from './components/CustomerCard/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => (
  <View style={styles.container}>
    <CustomerCard
      name={'Mauricio'}
      lastName={'Coelho'}
      address={'7889 West Tunnel Apt. 676 South Sherman, AK 16549'}
      latestVisit={'1h'}
    />
    <CustomerCard
      name={'João'}
      lastName={'Silva'}
      address={'Lombaardenstraat'}
      latestVisit={'2h'}
    />
  </View>
);

export default App;
