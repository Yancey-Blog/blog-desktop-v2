import React, { FC, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import MarkDown from 'markdown-to-jsx'
import hljs from 'highlight.js'
import { Poster, Title, Summary, Tag } from './styled'
import { GET_POST_BY_ID, UPDATE_PV } from '../typeDefs'
import { GetPostByIdQuery, GetPostByIdVar } from '../types'

const PostDetail: FC = () => {
  const {
    query: { id },
  } = useRouter()

  const markdownWrapperEl = useRef<HTMLDivElement>(null)
  const setupHighlight = () => {
    if (markdownWrapperEl?.current) {
      const preNodes = markdownWrapperEl.current.querySelectorAll('pre')
      preNodes.forEach((preNode) => {
        hljs.highlightBlock(preNode)
      })
    }
  }

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
    setupHighlight()
    updatePV()
  }, [])

  if (!post) return <div>loading...</div>

  const {
    getPostById: { title, posterUrl, summary, tags, content },
  } = post

  return (
    <>
      <Poster imageUrl={posterUrl} />
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <Summary>{summary}</Summary>
      <div ref={markdownWrapperEl}>
        <MarkDown>{content}</MarkDown>
      </div>
    </>
  )
}

export default PostDetail
