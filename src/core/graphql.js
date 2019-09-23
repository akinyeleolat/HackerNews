import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const uri = "https://www.graphqlhub.com/graphql";

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache()
});

export default client;
