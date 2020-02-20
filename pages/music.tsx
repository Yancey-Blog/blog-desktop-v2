import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
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
    <div>
      <Announcement data={data?.getAnnouncements || []} />
    </div>
  )
}

export default Music
