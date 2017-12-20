import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './data/apollo';
import Routes from './Routes';

const Client = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

export default Client;
