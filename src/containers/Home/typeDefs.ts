import gql from 'graphql-tag'

export const ANNOUNCEMENTS = gql`
  query GetAnnouncements {
    getAnnouncements {
      content
    }
  }
`

export const MOTTOS = gql`
  query GetMottos {
    getMottos {
      content
    }
  }
`

export const COVERS = gql`
  query GetCovers {
    getCovers {
      title
      coverUrl
    }
  }
`

export const OPEN_SOURCES = gql`
  query GetOpenSources {
    getOpenSources {
      title
      description
      url
      posterUrl
    }
  }
`
