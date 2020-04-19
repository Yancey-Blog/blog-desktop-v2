import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import ImageHeader from 'src/components/ImageHeader/ImageHeader'
import PostCard from './components/PostCard/PostCard'
import Top7PVPosts from './components/Top7PVPosts/Top7PVPosts'
import { POSTS } from './typeDefs'
import { PostQuery, PostVars } from './types'
import { PostContent, PostItemContainer } from './styled'

const PostList = () => {
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
      <ImageHeader
        title="Tech and Poems."
        imageUrl="/blog-fe-static/blog_page_header.jpg"
      />

      <PostContent>
        <PostItemContainer>
          {!data
            ? null
            : data.posts.items.map((post) => (
                <PostCard post={post} key={post._id} />
              ))}
        </PostItemContainer>
        <div>
          <Top7PVPosts />
        </div>
      </PostContent>
    </>
  )
}

export default PostList
