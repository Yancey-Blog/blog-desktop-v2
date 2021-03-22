import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import SkeletonIterator from 'src/components/SkeletonIterator/SkeletonIterator'
import Picture from 'src/components/Picture/Picture'
import { flexMixin } from 'src/styled/mixins'
import { SVG_SPRITE, AliOSSSuffix } from 'src/shared/constants'
import { generateAliOSSSuffix } from 'src/shared/utils'
import { PosterProps } from 'src/shared/types'
import Top7PVPostsSkeleton from '../Top7PVPostsSkeleton/Top7PVPostsSkeleton'
import SubHeader from '../SubTitle/SubTitle'
import { generatePostUrl } from '../../PostDetail/utils'
import { GetTopPVPostsQuery } from '../../types'

const CardItem = styled.div`
  position: relative;
  margin-bottom: 1rem;
  border-radius: 0.6rem;
  overflow: hidden;
`

const BlurBg = styled.span<PosterProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  filter: blur(10px);
`

const CardContent = styled.span`
  position: relative;
  ${flexMixin('space-between')}
  padding: .9rem;
  background-color: ${({ theme }) => theme.background.blurCard};
`

const Title = styled.span`
  display: block;
  width: 20rem;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.25;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => theme.text.header};
`

const Url = styled.span`
  display: block;
  margin-top: 0.8rem;
  width: 20rem;
  font-size: 1rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.text.secondary};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const Thumb = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.6rem;
  object-fit: cover;
`

interface Props {
  isSupportWebp: boolean
  topPVPosts: GetTopPVPostsQuery | undefined
}

const Top7PVPosts: FC<Props> = ({ topPVPosts, isSupportWebp }) => {
  return (
    <>
      <SubHeader title="Top 7 Most Viewed" icon={SVG_SPRITE.topRank} />

      {!topPVPosts ? (
        <SkeletonIterator count={7} skeletonComponent={Top7PVPostsSkeleton} />
      ) : (
        topPVPosts.getTopPVPosts.map((post) => {
          const { _id, title, posterUrl } = post
          return (
            <Link href="/post/[id]" as={`/post/${_id}`} key={_id}>
              <a>
                <CardItem>
                  <BlurBg
                    imageUrl={
                      isSupportWebp
                        ? `${posterUrl}${generateAliOSSSuffix(
                            AliOSSSuffix.WEBP_SUFFIX,
                          )}`
                        : `${posterUrl}${generateAliOSSSuffix(
                            AliOSSSuffix.THUMB_SUFFIX,
                          )}`
                    }
                  />

                  <CardContent>
                    <span>
                      <Title>{title}</Title>
                      <Url>{generatePostUrl(_id)}</Url>
                    </span>
                    <Picture src={posterUrl}>
                      <Thumb
                        alt={title}
                        src={`${posterUrl}${generateAliOSSSuffix(
                          AliOSSSuffix.THUMB_SUFFIX,
                        )}`}
                      />
                    </Picture>
                  </CardContent>
                </CardItem>
              </a>
            </Link>
          )
        })
      )}
    </>
  )
}

export default Top7PVPosts
