import gql from 'graphql-tag'

export const MOTTOS = gql`
  query GetMottos {
    getMottos {
      _id
      weight
      content
      createdAt
      updatedAt
    }
  }
`
