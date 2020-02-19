import React, { FC } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Layout from '../lib/components/Layout'

interface IAnnouncement {
  _id: string
  content: string
  createdAt: string
  updatedAt: string
}

interface Query {
  getAnnouncements: IAnnouncement[]
}

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

const Announcement: FC = () => {
  const { data } = useQuery<Query>(ANNOUNCEMENTS, {
    notifyOnNetworkStatusChange: true,
  })

  return (
    <Layout>
      {data &&
        data.getAnnouncements
          .reverse()
          .map(v => <p key={v._id}>{v.content}</p>)}
    </Layout>
  )
}

export default Announcement
