import React, { FC, useState, useEffect, ComponentType } from 'react'
import { useQuery } from '@apollo/client'
import dynamic from 'next/dynamic'
import { isAnniversary } from 'src/shared/utils'
import {
  HomeContainer,
  MottoSocialMediaBar,
  HomeMain,
  CoverWrapper,
} from './styled'
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
import PostList from './components/PostList'
import Slogan from './components/Slogan'
import ShowMore from './components/ShowMore'

interface Props {
  isSupportWebp: boolean
}

const Home: FC<Props> = ({ isSupportWebp }) => {
  const { data: covers } = useQuery<CoverQuery>(COVERS)
  const { data: announcements } = useQuery<AnnouncementQuery>(ANNOUNCEMENTS)
  const { data: openSources } = useQuery<OpenSourceQuery>(OPEN_SOURCES)
  const { data: mottos } = useQuery<MottoQuery>(MOTTOS)

  const [
    FireWorkComponent,
    setFireWorkComponent,
  ] = useState<ComponentType | null>(null)

  useEffect(() => {
    if (isAnniversary()) {
      const DynamicComponent = dynamic(
        () => import('src/components/Activities/Fireworks/Fireworks'),
      )

      setFireWorkComponent(DynamicComponent)
    }
  }, [])

  return (
    <HomeContainer>
      <CoverWrapper>
        {FireWorkComponent && <FireWorkComponent />}

        <Cover
          isSupportWebp={isSupportWebp}
          covers={covers ? covers.getAllPublicCovers : []}
        />

        <MottoSocialMediaBar>
          <Slogan />
          <Motto mottos={mottos ? mottos.getMottos : []} />
        </MottoSocialMediaBar>
      </CoverWrapper>
      <HomeMain>
        <Announcement
          announcements={announcements ? announcements.getAnnouncements : []}
        />

        <OpenSource
          openSources={openSources ? openSources.getOpenSources : []}
        />

        <PostList />

        <ShowMore />
      </HomeMain>
    </HomeContainer>
  )
}

export default Home
