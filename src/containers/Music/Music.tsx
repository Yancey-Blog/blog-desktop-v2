import { useQuery } from '@apollo/client'
import { ALI_OSS_FE_STATIC_PATH } from 'src/shared/constants'
import ImageHeader from 'src/components/ImageHeader/ImageHeader'
import SkeletonIterator from 'src/components/SkeletonIterator/SkeletonIterator'
import { POSTS } from 'src/containers/Post/typeDefs'
import { PostQuery, PostVars } from 'src/containers/Post/types'
import LiveTour from './components/LiveTour'
import Card from './components/Card'
import BestAlbum from './components/BestAlbum'
import CardSkeleton from './components/CardSkeleton'
import LiveTourSkeleton from './components/LiveTourSkeleton'
import BestAlbumSkeleton from './components/BestAlbumSkeleton'
import { LiveTourQuery, YanceyMusicQuery, BestAlbumQuery } from './types'
import { LIVE_TOURS, YANCEY_MUSIC, BEST_ALBUMS } from './typeDefs'
import {
  MusicWrapper,
  SubTitle,
  LiveToursMusicNotes,
  MusicNotes,
  BestAlbumWrapper,
  YanceyMusicWrapper,
} from './styled'

const Music = () => {
  const { data: liveTours } = useQuery<LiveTourQuery>(LIVE_TOURS)
  const { data: bestAlbums } = useQuery<BestAlbumQuery>(BEST_ALBUMS)
  const { data: yanceymusics } = useQuery<YanceyMusicQuery>(YANCEY_MUSIC)
  const { data: posts } = useQuery<PostQuery, PostVars>(POSTS, {
    variables: {
      input: {
        page: 1,
        pageSize: 4,
        tag: 'Music',
      },
    },
  })

  return (
    <>
      <ImageHeader
        title="Music"
        imageUrl={`/${ALI_OSS_FE_STATIC_PATH}/music_page_header.jpg`}
      />

      <MusicWrapper>
        <LiveToursMusicNotes>
          <div>
            <SubTitle>LIVE TOURS</SubTitle>
            {!liveTours ? (
              <SkeletonIterator
                count={1}
                skeletonComponent={LiveTourSkeleton}
              />
            ) : (
              <LiveTour liveTours={liveTours.getLiveTours} />
            )}
          </div>
          <div>
            <SubTitle>MUSIC NOTES</SubTitle>

            <MusicNotes>
              {!posts ? (
                <SkeletonIterator count={4} skeletonComponent={CardSkeleton} />
              ) : (
                posts.posts.items.map((post) => (
                  <Card
                    key={post._id}
                    type="note"
                    url={post._id}
                    title={post.summary}
                    date={post.createdAt}
                    cover={post.posterUrl}
                  />
                ))
              )}
            </MusicNotes>
          </div>
        </LiveToursMusicNotes>

        <div>
          <SubTitle>BEST ALBUM</SubTitle>
          <BestAlbumWrapper>
            {!bestAlbums ? (
              <SkeletonIterator
                count={4}
                skeletonComponent={BestAlbumSkeleton}
              />
            ) : (
              bestAlbums.getBestAlbums
                .slice(0, 4)
                .map((bestAlbum) => (
                  <BestAlbum key={bestAlbum._id} bestAlbum={bestAlbum} />
                ))
            )}
          </BestAlbumWrapper>
        </div>

        <div>
          <SubTitle>YANCEY MUSIC</SubTitle>
          <YanceyMusicWrapper>
            {!yanceymusics ? (
              <SkeletonIterator count={4} skeletonComponent={CardSkeleton} />
            ) : (
              yanceymusics.getYanceyMusic.map((yanceyMusic) => (
                <Card
                  key={yanceyMusic._id}
                  url={yanceyMusic.soundCloudUrl}
                  title={yanceyMusic.title}
                  date={yanceyMusic.releaseDate}
                  cover={yanceyMusic.posterUrl}
                />
              ))
            )}
          </YanceyMusicWrapper>
        </div>
      </MusicWrapper>
    </>
  )
}

export default Music
