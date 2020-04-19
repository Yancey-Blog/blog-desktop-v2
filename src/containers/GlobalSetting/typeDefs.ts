import gql from 'graphql-tag'

export const GET_GLOBAL_SETTING = gql`
  query GetGlobalSetting {
    getGlobalSetting {
      releasePostId
      cvPostId
      isGrayTheme
    }
  }
`
