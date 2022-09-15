import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphql = new ApolloClient({
  uri: 'https://blog-api-gql.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  credentials: 'same-origin'
});

export default graphql;
