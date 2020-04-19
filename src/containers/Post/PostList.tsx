import React from 'react'
import ImageHeader from 'src/components/ImageHeader/ImageHeader'
import { PostWrapper } from './styled'

const PostList = () => {
  return (
    <PostWrapper>
      <ImageHeader
        title="Tech, Music and Poem."
        imageUrl="/blog-fe-static/blog_page_header.jpg"
      />
    </PostWrapper>
  )
}

export default PostList
