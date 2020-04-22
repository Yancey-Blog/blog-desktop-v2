import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import MarkDown from 'markdown-to-jsx'
import { GET_POST_BY_ID, UPDATE_PV } from '../typeDefs'
import { GetPostByIdQuery, GetPostByIdVar } from '../types'

const PostDetail: FC = () => {
  const {
    query: { id },
  } = useRouter()

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
    updatePV()
  }, [])

  if (!post) return <div>loading...</div>

  return (
    <div>
      <MarkDown>{post.getPostById.content}</MarkDown>
    </div>
  )
}

export default PostDetail
