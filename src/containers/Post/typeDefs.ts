import gql from 'graphql-tag'

const POST_ITEM_FRAGMENT = gql`
  fragment PostItemFragment on PostItemModel {
    _id
    posterUrl
    title
    summary
    tags
    lastModifiedDate
    like
    pv
    isPublic
    createdAt
    updatedAt
  }
`

export const POSTS = gql`
  query Posts($input: PaginationInput!) {
    posts(input: $input) {
      total
      page
      pageSize
      items {
        ...PostItemFragment
      }
    }
  }
  ${POST_ITEM_FRAGMENT}
`

export const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    getPostById(id: $id) {
      content
      ...PostItemFragment
      prev {
        _id
        posterUrl
        title
      }

      next {
        _id
        posterUrl
        title
      }
    }
  }
  ${POST_ITEM_FRAGMENT}
`

export const GET_TOP_PV_POSTS = gql`
  query GetTopPVPosts($limit: Int!) {
    getTopPVPosts(limit: $limit) {
      _id
      title
      posterUrl
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

export const ARCHIVE = gql`
  query Archive {
    archive {
      _id
      months {
        month
        days {
          id
          title
          pv
          createdAt
        }
      }
    }
  }
`
