import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Layout from '../src/components/Layout/Layout'
import Announcement from '../src/components/Home/Announcement'

const HomePage = () => {
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

export default HomePage
