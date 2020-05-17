import React, { FC, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import LazyLoad from 'react-lazyload'
import MarkDown from 'markdown-to-jsx'
import { DiscussionEmbed } from 'disqus-react'
import MetaHead from 'src/components/Head/Head'
import { ALI_OSS_SUFFIX, DISCUSSION_KEY } from 'src/shared/constants'
import { generateAliOSSSuffix } from 'src/shared/utils'
import PostMeta from '../components/PostMeta/PostMeta'
import YellowSVG from '../components/YellowSVG/YellowSVG'
import SharePanel from '../components/SharePanel/SharePanel'
import PrevAndNext from '../components/PrevAndNext/PrevAndNext'
import PostDetailSkeleton from '../components/PostDetailSkeleton/PostDetailSkeleton'
import { GET_POST_BY_ID, UPDATE_PV } from '../typeDefs'
import { GetPostByIdQuery, GetPostByIdVar } from '../types'
import {
  setupHighlight,
  removeEmbededTag,
  setupTocbot,
  generateShareUrl,
} from './tools'
import {
  PostDetailWrapper,
  Poster,
  ImageGroup,
  ImageAlt,
  Title,
  Summary,
  Content,
  Menu,
  TableWrapper,
} from './styled'

const PostDetail: FC = () => {
  const {
    query: { id },
    replace,
  } = useRouter()

  const markdownWrapperEl = useRef<HTMLDivElement>(null)

  const [updatePV] = useMutation(UPDATE_PV, {
    variables: { id },
    onError() {},
  })

  const MarkdownImg = ({
    src,
    alt,
    ...props
  }: {
    src: string
    alt: string
    props: any
  }) => (
    <ImageGroup className="postImgGroup" {...props}>
      <LazyLoad height={200}>
        <picture>
          <source
            srcSet={`${src}${generateAliOSSSuffix(ALI_OSS_SUFFIX.WEBP_SUFFIX)}`}
            type="image/webp"
          />
          <img src={src} alt={alt} />
        </picture>
      </LazyLoad>
      <ImageAlt className="postImgAlt">{alt}</ImageAlt>
    </ImageGroup>
  )

  const MarkdownTable = ({ ...props }) => (
    <TableWrapper>
      <table {...props} />
    </TableWrapper>
  )

  const { data: post } = useQuery<GetPostByIdQuery, GetPostByIdVar>(
    GET_POST_BY_ID,
    {
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
      variables: { id: id as string },

      onCompleted() {
        setupHighlight(markdownWrapperEl)
        setupTocbot()
      },

      onError() {
        replace('/404')
      },
    },
  )

  useEffect(() => {
    updatePV()
  }, [])

  if (!post) return <PostDetailSkeleton />

  const {
    getPostById: {
      title,
      posterUrl,
      summary,
      tags,
      content,
      createdAt,
      lastModifiedDate,
      pv,
      like,
      prev,
      next,
    },
  } = post

  return (
    <PostDetailWrapper>
      <MetaHead
        title={`${title} | Yancey Inc.`}
        useTwitterCard
        postTitle={title}
        postSummary={summary}
        postPosterUrl={posterUrl}
        postUrl={generateShareUrl(id as string)}
      />

      <YellowSVG />

      <SharePanel
        id={id as string}
        title={title}
        like={like}
        postUrl={generateShareUrl(id as string)}
      />
      <Menu className="postMenu" />

      <Content>
        <picture>
          <source
            srcSet={`${posterUrl}${generateAliOSSSuffix(
              ALI_OSS_SUFFIX.WEBP_SUFFIX,
            )}`}
            type="image/webp"
          />
          <Poster src={posterUrl} alt={title} />
        </picture>

        <Title>{title}</Title>
        <PostMeta
          tags={tags}
          createdAt={createdAt}
          lastModifiedDate={lastModifiedDate}
          pv={pv}
          like={like}
        />
        <div ref={markdownWrapperEl}>
          <Summary>{summary}</Summary>
          <MarkDown
            options={{
              slugify: (str) => str,
              overrides: {
                img: {
                  component: MarkdownImg,
                },
                table: {
                  component: MarkdownTable,
                },
              },
            }}
            className="postDetailContent"
          >
            {removeEmbededTag(content)}
          </MarkDown>
        </div>

        <PrevAndNext prev={prev} next={next} />

        <DiscussionEmbed
          shortname={DISCUSSION_KEY}
          config={{
            url: generateShareUrl(id as string),
            identifier: id as string,
            title,
          }}
        />
      </Content>
    </PostDetailWrapper>
  )
}

export default PostDetail
