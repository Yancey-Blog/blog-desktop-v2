import React, { FC } from 'react'
import Link from 'next/link'
import { SVG_SPRITE } from 'src/shared/constants'
import svgIcons from '../../../../static/svg-sprite.svg'
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

const PostCard: FC = () => {
  return (
    <PostCardWrapper>
      <Link href="about">
        <PosterAnchor>
          <Poster
            src="https://static.yancey.app/1f56269b-006e-4bc5-ae05-db6dffa01b91.jpg"
            alt="poster"
          />
        </PosterAnchor>
      </Link>
      <SummaryWrapper>
        <ReleasedAt>
          <SVG className="timesvg">
            <use xlinkHref={`${svgIcons}${SVG_SPRITE.time}`} />
          </SVG>
          Released At 2019-11-25 22:19:07
        </ReleasedAt>

        <Link href="about">
          <a>
            <Title>聊一聊 TypeScript 的工程引用</Title>
          </a>
        </Link>

        <Meta>
          <MetaItem>
            <SVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.eye}`} />
            </SVG>
            102 PV
          </MetaItem>
          <MetaItem>
            <SVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.comments1}`} />
            </SVG>
            3 Likes
          </MetaItem>
          <MetaItem>
            <SVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.closeFolder}`} />
            </SVG>
            <Link href="about">
              <a>TypeScript</a>
            </Link>
          </MetaItem>
        </Meta>

        <Summary>
          这里是《写给前端工程师的 HTTP
          系列》，记得有位大佬曾经说过：“大厂前端面试对 HTTP 的要求比 CSS
          还要高”，由此可见 HTTP
          的重要程度不可小视。文章写作计划如下，视情况可能有一定的删减，本篇是的重要程度不可小视。文章写作计划如下，视情况可能有一定的删减，本篇是
        </Summary>

        <Link href="about">
          <ReadMoreSVG>
            <use xlinkHref={`${svgIcons}${SVG_SPRITE.more}`} />
          </ReadMoreSVG>
        </Link>
      </SummaryWrapper>
    </PostCardWrapper>
  )
}

export default PostCard
