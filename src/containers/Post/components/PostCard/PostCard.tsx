import { FC } from 'react'
import Link from 'next/link'
import LazyLoadImage from 'src/components/LazyLoadImage/LazyLoadImage'
import { formatDate } from 'src/shared/utils'
import { SVG_SPRITE } from 'src/shared/constants'
import {
  PostCardWrapper,
  PosterAnchor,
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
  isSupportWebp: boolean
}

const PostCard: FC<Props> = ({ post }) => {
  const { _id, createdAt, posterUrl, title, pv, like, tags, summary } = post

  return (
    <PostCardWrapper>
      <Link href={`/post/${_id}`} passHref>
        <PosterAnchor>
          <LazyLoadImage imageUrl={posterUrl} alt={title} />
        </PosterAnchor>
      </Link>
      <SummaryWrapper>
        <ReleasedAt>
          <SVG className="timesvg">
            <use xlinkHref={SVG_SPRITE.clock} />
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
              <use xlinkHref={SVG_SPRITE.eye} />
            </SVG>
            {pv} PV
          </MetaItem>
          <MetaItem>
            <SVG>
              <use xlinkHref={SVG_SPRITE.like} />
            </SVG>
            {like} Likes
          </MetaItem>
          <MetaItem>
            <SVG>
              <use xlinkHref={SVG_SPRITE.folder} />
            </SVG>
            <Link href={`/post?tag=${tags[0]}`}>
              <a>{tags[0]}</a>
            </Link>
          </MetaItem>
        </Meta>

        <Summary>{summary}</Summary>

        <Link href={`/post/${_id}`}>
          <a>
            <ReadMoreSVG>
              <use xlinkHref={SVG_SPRITE.more} />
            </ReadMoreSVG>
          </a>
        </Link>
      </SummaryWrapper>
    </PostCardWrapper>
  )
}

export default PostCard
