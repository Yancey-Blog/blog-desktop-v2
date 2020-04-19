import React, { FC } from 'react'
import { SVG_SPRITE } from 'src/shared/constants'
import PostCard from 'src/containers/Post/components/PostCard'
import SubTitle from './SubTitle'

const PostList: FC = () => {
  return (
    <>
      <SubTitle icon={SVG_SPRITE.new} title="The Latest!" />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </>
  )
}

export default PostList
