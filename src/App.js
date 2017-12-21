import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import client from './data/apollo';
import Routes from './Routes';

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <View style={styles.app}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </View>
  </ApolloProvider>
);

export default App;
