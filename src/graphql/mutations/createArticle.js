import { gql } from "@apollo/client"

const CREATE_ARTICLE = gql`
  mutation createArticle ($input: CreateArticleInput!) {
    createArticle (input: $input) {
        body
        id
    }
  }
`
export default CREATE_ARTICLE;
