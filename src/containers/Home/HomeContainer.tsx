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

const HomeContainer: FC = () => {
  const { data: covers } = useQuery<CoverQuery>(COVERS)
  const { data: announcements } = useQuery<AnnouncementQuery>(ANNOUNCEMENTS)
  const { data: openSources } = useQuery<OpenSourceQuery>(OPEN_SOURCES)
  const { data: mottos } = useQuery<MottoQuery>(MOTTOS)

  return (
    <section>
      <Announcement
        announcements={announcements ? announcements.getAnnouncements : []}
      />
      <OpenSource openSources={openSources ? openSources.getOpenSources : []} />
      <Motto mottos={mottos ? mottos.getMottos : []} />
      <Cover covers={covers ? covers.getCovers : []} />
    </section>
  )
}

export default HomeContainer
