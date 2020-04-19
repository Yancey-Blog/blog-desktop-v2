import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SVG_SPRITE } from 'src/shared/constants'
import PostCard from 'src/containers/Post/components/PostCard/PostCard'
import { POSTS } from 'src/containers/Post/typeDefs'
import { PostQuery, PostVars } from 'src/containers/Post/types'
import SubTitle from './SubTitle'

const PostList: FC = () => {
  const { data } = useQuery<PostQuery, PostVars>(POSTS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      input: {
        page: 1,
        pageSize: 10,
      },
    },
  })

  return (
    <>
      <SubTitle icon={SVG_SPRITE.new} title="The Latest!" />

      {!data
        ? null
        : data.posts.items.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
    </>
  )
}

export default PostList
