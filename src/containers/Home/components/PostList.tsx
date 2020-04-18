import React, { FC } from 'react'
import { SVG_SPRITE } from 'src/shared/constants'
import SubTitle from './SubTitle'

const PostList: FC = () => {
  return (
    <>
      <SubTitle icon={SVG_SPRITE.new} title="The Latest!" />
    </>
  )
}

export default PostList
