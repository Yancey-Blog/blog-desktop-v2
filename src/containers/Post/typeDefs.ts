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

export const GET_TOP_PV_POSTS = gql`
  query GetTopPVPosts($limit: Int!) {
    getTopPVPosts(limit: $limit) {
      _id
      title
      posterUrl
      pv
    }
  }
`

export const GET_ALL_TAGS = gql`
  query GetAllTags {
    getAllTags {
      tags
    }
  }
`

export const UPDATE_LIKE = gql`
  mutation UpdateLike($id: ID!) {
    updateLike(id: $id) {
      _id
      like
    }
  }
`

export const UPDATE_PV = gql`
  mutation UpdatePV($id: ID!) {
    updatePV(id: $id) {
      _id
      pv
    }
  }
`
