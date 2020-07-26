import { gql } from '@apollo/client'

export const GET_GLOBAL_SETTING = gql`
  query GetGlobalSetting {
    getGlobalSetting {
      releasePostId
      cvPostId
      isGrayTheme
    }
  }
`
