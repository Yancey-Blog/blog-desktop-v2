import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Pagination from '@material-ui/lab/Pagination'
import ImageHeader from 'src/components/ImageHeader/ImageHeader'
import PostCard from './components/PostCard/PostCard'
import Top7PVPosts from './components/Top7PVPosts/Top7PVPosts'
import { POSTS, GET_TOP_PV_POSTS } from './typeDefs'
import {
  PostQuery,
  PostVars,
  GetTopPVPostsQuery,
  GetTopPVPostsVars,
} from './types'
import { PostContent, PostItemContainer } from './styled'

const PostList = () => {
  const { data: posts } = useQuery<PostQuery, PostVars>(POSTS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      input: {
        page: 1,
        pageSize: 10,
      },
    },
  })

  const { data: topPVPosts } = useQuery<GetTopPVPostsQuery, GetTopPVPostsVars>(
    GET_TOP_PV_POSTS,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        limit: 7,
      },
    },
  )

  return (
    <>
      <ImageHeader
        title="Tech and Poems."
        imageUrl="/blog-fe-static/blog_page_header.jpg"
      />

      <PostContent>
        <PostItemContainer>
          {!posts
            ? null
            : posts.posts.items.map((post) => (
                <PostCard post={post} key={post._id} />
              ))}
          <Pagination count={10} color="primary" />
        </PostItemContainer>

        <div>
          <Top7PVPosts
            topPVPosts={topPVPosts ? topPVPosts.getTopPVPosts : []}
          />
        </div>
      </PostContent>
    </>
  )
}

export default PostList
