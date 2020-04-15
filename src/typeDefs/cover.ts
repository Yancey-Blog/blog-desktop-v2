import gql from 'graphql-tag'

export const COVERS = gql`
  query GetCovers {
    getCovers {
      _id
      title
      coverUrl
      weight
      isPublic
      createdAt
      updatedAt
    }
  }
`
