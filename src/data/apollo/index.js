import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import links from './links';
import cache from './cache';

const link = ApolloLink.from(links);
const client = new ApolloClient({
  link,
  cache,
});

export default client;
