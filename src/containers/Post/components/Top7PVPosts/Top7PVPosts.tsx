import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'
import { SVG_SPRITE, DOMAIN } from 'src/shared/constants'
import SubHeader from '../SubTitle/SubTitle'
import { IPostItem } from '../../types'

interface PosterProps {
  readonly imageUrl: string
}

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
  topPVPosts: IPostItem[]
}

const Top7PVPosts: FC<Props> = ({ topPVPosts }) => {
  return (
    <>
      <SubHeader title="Top 7 Most Viewed" icon={SVG_SPRITE.crown} />

      {topPVPosts.map((post) => {
        const { _id, title, posterUrl } = post
        return (
          <Link href={`/post/${_id}`} key={_id}>
            <a>
              <CardItem>
                <BlurBg imageUrl={posterUrl} />

                <CardContent>
                  <span>
                    <Title>{title}</Title>
                    <Url>{`${DOMAIN}/post/${_id}`}</Url>
                  </span>
                  <Thumb alt={title} src={posterUrl} />
                </CardContent>
              </CardItem>
            </a>
          </Link>
        )
      })}
    </>
  )
}

export default Top7PVPosts
