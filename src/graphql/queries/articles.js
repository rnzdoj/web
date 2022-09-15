import { gql } from '@apollo/client';

const ARTICLES = gql`
  query articles ($after: String, $before: String, $first: Int, $last: Int) {
    articles (after: $after, before: $before, first: $first, last: $last) {
      edges {
        cursor
        node {
          body
          id
        }
      }
      nodes {
        body
        id
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`

export default ARTICLES
