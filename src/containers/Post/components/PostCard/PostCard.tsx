import React, { FC } from 'react'
import Link from 'next/link'
import { SVG_SPRITE } from 'src/shared/constants'
import { formatDate } from 'src/shared/utils'
import svgIcons from 'src/static/svg-sprite.svg'
import {
  PostCardWrapper,
  PosterAnchor,
  Poster,
  SummaryWrapper,
  ReleasedAt,
  SVG,
  Title,
  Meta,
  MetaItem,
  Summary,
  ReadMoreSVG,
} from './styled'
import { IPostItem } from '../../types'

interface Props {
  post: IPostItem
}

const PostCard: FC<Props> = ({ post }) => {
  const { _id, createdAt, posterUrl, title, pv, like, tags, summary } = post
  return (
    <PostCardWrapper>
      <Link href="/post/[id]" as={`/post/${_id}`}>
        <PosterAnchor>
          <Poster src={posterUrl} alt={title} />
        </PosterAnchor>
      </Link>
      <SummaryWrapper>
        <ReleasedAt>
          <SVG className="timesvg">
            <use xlinkHref={`${svgIcons}${SVG_SPRITE.time}`} />
          </SVG>
          Released At {formatDate(createdAt)}
        </ReleasedAt>

        <Link href={`/post/${_id}`}>
          <a>
            <Title>{title}</Title>
          </a>
        </Link>

        <Meta>
          <MetaItem>
            <SVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.eye}`} />
            </SVG>
            {pv} PV
          </MetaItem>
          <MetaItem>
            <SVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.comments1}`} />
            </SVG>
            {like} Likes
          </MetaItem>
          <MetaItem>
            <SVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.closeFolder}`} />
            </SVG>
            <Link href={`/tag/${tags[0]}`}>
              <a>{tags[0]}</a>
            </Link>
          </MetaItem>
        </Meta>

        <Summary>{summary}</Summary>

        <Link href={`/post/${_id}`}>
          <a>
            <ReadMoreSVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.more}`} />
            </ReadMoreSVG>
          </a>
        </Link>
      </SummaryWrapper>
    </PostCardWrapper>
  )
}

export default PostCard
