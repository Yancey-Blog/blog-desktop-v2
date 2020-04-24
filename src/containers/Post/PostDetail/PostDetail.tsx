import React, { FC, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import MarkDown from 'markdown-to-jsx'
import { WEBP_SUFFIX } from 'src/shared/constants'
import PostMeta from '../components/PostMeta/PostMeta'
import YellowSVG from '../components/YellowSVG/YellowSVG'
import { GET_POST_BY_ID, UPDATE_PV } from '../typeDefs'
import { GetPostByIdQuery, GetPostByIdVar } from '../types'
import {
  setupHighlight,
  addLineNumbers,
  showImageAlt,
  wrapImg,
  setupBaguetteBox,
  removeEmbededTag,
  setupTocbot,
} from './tools'
import {
  PostDetailWrapper,
  Poster,
  Title,
  Summary,
  Content,
  Menu,
} from './styled'

const PostDetail: FC = () => {
  const {
    query: { id },
  } = useRouter()

  const markdownWrapperEl = useRef<HTMLDivElement>(null)

  const { data: post } = useQuery<GetPostByIdQuery, GetPostByIdVar>(
    GET_POST_BY_ID,
    {
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
      variables: { id: id as string },
    },
  )

  const [updatePV] = useMutation(UPDATE_PV, {
    variables: { id },
    onError() {},
  })

  useEffect(() => {
    setupHighlight(markdownWrapperEl)
    addLineNumbers()
    showImageAlt()
    wrapImg()
    setupBaguetteBox()
    setupTocbot()
    updatePV()
  }, [])

  if (!post) return <div>loading...</div>

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
    },
  } = post

  return (
    <PostDetailWrapper>
      <YellowSVG />

      <Content>
        <Poster imageUrl={`${posterUrl}${WEBP_SUFFIX}`} />
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
            options={{ slugify: (str) => str }}
            className="postDetailContent"
          >
            {removeEmbededTag(content)}
          </MarkDown>
        </div>
      </Content>

      <Menu className="postMenu" />
    </PostDetailWrapper>
  )
}

export default PostDetail
