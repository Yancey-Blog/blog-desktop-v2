import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { COVERS, ANNOUNCEMENTS, OPEN_SOURCES, MOTTOS } from './typeDefs'
import {
  AnnouncementQuery,
  MottoQuery,
  CoverQuery,
  OpenSourceQuery,
} from './types'
import Announcement from './components/Announcement'
import Motto from './components/Motto'
import OpenSource from './components/OpenSource'
import Cover from './components/Cover'

const Home: FC = () => {
  const { data: covers } = useQuery<CoverQuery>(COVERS)
  const { data: announcements } = useQuery<AnnouncementQuery>(ANNOUNCEMENTS)
  const { data: openSources } = useQuery<OpenSourceQuery>(OPEN_SOURCES)
  const { data: mottos } = useQuery<MottoQuery>(MOTTOS)

  return (
    <section>
      <Cover covers={covers ? covers.getAllPublicCovers : []} />
      <Announcement
        announcements={announcements ? announcements.getAnnouncements : []}
      />

      <Motto mottos={mottos ? mottos.getMottos : []} />
      <OpenSource openSources={openSources ? openSources.getOpenSources : []} />
    </section>
  )
}

export default Home
