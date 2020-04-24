import React, { FC, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import MarkDown from 'markdown-to-jsx'
import { WEBP_SUFFIX } from 'src/shared/constants'
import { removeEmbededTag } from 'src/shared/utils'
import PostMeta from '../components/PostMeta/PostMeta'
import { GET_POST_BY_ID, UPDATE_PV } from '../typeDefs'
import { GetPostByIdQuery, GetPostByIdVar } from '../types'
import {
  setupHighlight,
  addLineNumbers,
  showImageAlt,
  wrapImg,
  setupBaguetteBox,
} from './tools'
import {
  PostDetailWrapper,
  Poster,
  Svg,
  Title,
  Summary,
  Content,
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
      <Svg width="2000" height="2000" viewBox="0 0 600 600">
        <g transform="translate(300,300)">
          <path d="M67.5,-106.7C77.5,-57.5,68.8,-28.8,79.8,11.1C90.9,50.9,121.8,101.8,111.8,133C101.8,164.2,50.9,175.6,-4,179.6C-58.9,183.6,-117.9,180.2,-163,149C-208.2,117.9,-239.6,58.9,-242.4,-2.8C-245.2,-64.6,-219.5,-129.2,-174.3,-178.3C-129.2,-227.5,-64.6,-261.2,-17.9,-243.3C28.8,-225.4,57.5,-155.8,67.5,-106.7Z" />
        </g>
      </Svg>

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
          <MarkDown className="postDetailContent">
            {removeEmbededTag(content)}
          </MarkDown>
        </div>
      </Content>
    </PostDetailWrapper>
  )
}

export default PostDetail
