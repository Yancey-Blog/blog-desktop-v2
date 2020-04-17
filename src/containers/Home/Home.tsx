import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { HomeContainer, MottoSocialMediaBar } from './styled'
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
import Slogan from './components/Slogan'

const Home: FC = () => {
  const { data: covers } = useQuery<CoverQuery>(COVERS)
  const { data: announcements } = useQuery<AnnouncementQuery>(ANNOUNCEMENTS)
  const { data: openSources } = useQuery<OpenSourceQuery>(OPEN_SOURCES)
  const { data: mottos } = useQuery<MottoQuery>(MOTTOS)

  return (
    <HomeContainer>
      <Cover covers={covers ? covers.getAllPublicCovers : []} />

      <MottoSocialMediaBar>
        <Slogan />
        <Motto mottos={mottos ? mottos.getMottos : []} />
      </MottoSocialMediaBar>

      <Announcement
        announcements={announcements ? announcements.getAnnouncements : []}
      />

      <OpenSource openSources={openSources ? openSources.getOpenSources : []} />
    </HomeContainer>
  )
}

export default Home
