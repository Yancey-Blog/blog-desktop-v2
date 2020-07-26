import { gql } from '@apollo/client'

export const PLAYERS = gql`
  query Players {
    players {
      title
      artist
      lrc
      coverUrl
      musicFileUrl
    }
  }
`

export const BEST_ALBUMS = gql`
  query GetBestAlbums {
    getBestAlbums {
      _id
      title
      artist
      coverUrl
      mvUrl
      releaseDate
      createdAt
      updatedAt
    }
  }
`

export const LIVE_TOURS = gql`
  query GetLiveTours {
    getLiveTours {
      _id
      title
      posterUrl
      showTime
      createdAt
      updatedAt
    }
  }
`

export const YANCEY_MUSIC = gql`
  query GetYanceyMusic {
    getYanceyMusic {
      _id
      title
      soundCloudUrl
      posterUrl
      releaseDate
      createdAt
      updatedAt
    }
  }
`
