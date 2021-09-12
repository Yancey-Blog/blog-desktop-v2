import { FC } from 'react'
import Layout from 'src/containers/Layout/Layout'
import PostListContainer from 'src/containers/Post/PostList/PostList'

const Post: FC = () => {
  return (
    <Layout title="Blog | Yancey Inc.">
      <PostListContainer />
    </Layout>
  )
}

export default Post
