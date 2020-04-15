import gql from 'graphql-tag'

export const OPEN_SOURCES = gql`
  query GetOpenSources {
    getOpenSources {
      _id
      title
      description
      url
      posterUrl
      createdAt
      updatedAt
    }
  }
`
