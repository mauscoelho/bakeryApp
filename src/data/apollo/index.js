import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { GQL_URI } from "../../constants";

const client = new ApolloClient({
  link: new HttpLink({ uri: GQL_URI }),
  cache: new InMemoryCache()
});

export default client;
