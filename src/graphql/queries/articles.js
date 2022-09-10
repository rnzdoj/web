import { gql } from '@apollo/client';

const ARTICLES = gql`
  query articles {
    articles {
      body
      id
    }
  }
`

export default ARTICLES
