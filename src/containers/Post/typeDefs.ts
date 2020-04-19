import gql from 'graphql-tag'

export const POSTS = gql`
  query Posts($input: PaginationInput!) {
    posts(input: $input) {
      total
      page
      pageSize
      items {
        _id
        posterUrl
        title
        summary
        content
        tags
        lastModifiedDate
        like
        pv
        createdAt
        updatedAt
      }
    }
  }
`
