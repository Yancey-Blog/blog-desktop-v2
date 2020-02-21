import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Layout from '../components/Layout'
import Announcement from '../components/Announcement'

const Music = () => {
  const ANNOUNCEMENTS = gql`
    query GetAnnouncements {
      getAnnouncements {
        _id
        content
        createdAt
        updatedAt
      }
    }
  `

  const { data } = useQuery(ANNOUNCEMENTS, {
    notifyOnNetworkStatusChange: true,
  })

  return (
    <Layout>
      <Announcement data={data?.getAnnouncements || []} />
    </Layout>
  )
}

export default Music
