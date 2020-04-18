import gql from 'graphql-tag'

export const PLAYERS = gql`
  query Plyaers {
    players {
      title
      artist
      lrc
      coverUrl
      musicFileUrl
    }
  }
`
