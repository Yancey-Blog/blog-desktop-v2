import { FC, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import MarkDown from 'markdown-to-jsx'
import { DiscussionEmbed } from 'disqus-react'
import LazyLoadImage from 'src/components/LazyLoadImage/LazyLoadImage'
import MetaHead from 'src/components/Head/Head'
import Picture from 'src/components/Picture/Picture'
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
  generatePostUrl,
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
      <LazyLoadImage imageUrl={src} alt={alt} noAnimation />
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
        postUrl={generatePostUrl(id as string)}
      />

      <YellowSVG />

      <SharePanel
        id={id as string}
        title={title}
        like={like}
        postUrl={generatePostUrl(id as string)}
      />
      <Menu className="postMenu" />

      <Content>
        <Picture src={posterUrl}>
          <Poster src={posterUrl} alt={title} />
        </Picture>
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
          shortname={process.env.NEXT_PUBLIC_DISCUSSION_KEY}
          config={{
            url: generatePostUrl(id as string),
            identifier: id as string,
            title,
          }}
        />
      </Content>
    </PostDetailWrapper>
  )
}

export default PostDetail
