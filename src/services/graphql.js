import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphql = new ApolloClient({
  uri: 'http://127.0.0.1:3000/graphql',
  cache: new InMemoryCache(),
});

export default graphql;