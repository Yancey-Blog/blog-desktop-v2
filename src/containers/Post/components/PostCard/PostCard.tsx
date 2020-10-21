import { FC } from 'react'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'
import Picture from 'src/components/Picture/Picture'
import { SVG_SPRITE } from 'src/shared/constants'
import { formatDate } from 'src/shared/utils'
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
      <Link href={`/post/${_id}`} passHref prefetch={false}>
        <PosterAnchor>
          <LazyLoad height={200}>
            <Picture src={posterUrl}>
              <Poster src={posterUrl} alt={title} />
            </Picture>
          </LazyLoad>
        </PosterAnchor>
      </Link>
      <SummaryWrapper>
        <ReleasedAt>
          <SVG className="timesvg">
            <use xlinkHref={SVG_SPRITE.clock} />
          </SVG>
          Released At {formatDate(createdAt)}
        </ReleasedAt>

        <Link href="/post/[id]" as={`/post/${_id}`} prefetch={false}>
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

        <Link href="/post/[id]" as={`/post/${_id}`} prefetch={false}>
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
