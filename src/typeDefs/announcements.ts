import gql from 'graphql-tag'

export const ANNOUNCEMENTS = gql`
  query GetAnnouncements {
    getAnnouncements {
      _id
      weight
      content
      createdAt
      updatedAt
    }
  }
`
