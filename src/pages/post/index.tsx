import { FC } from 'react'
import { GetServerSidePropsContext } from 'next'
import Layout from 'src/containers/Layout/Layout'
import PostListContainer from 'src/containers/Post/PostList/PostList'

interface Props {
  isSupportWebp: boolean
}

const Post: FC<Props> = ({ isSupportWebp }) => {
  return (
    <Layout title="Blog | Yancey Inc.">
      <PostListContainer isSupportWebp={isSupportWebp} />
    </Layout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      isSupportWebp: ctx.req.headers.accept?.includes('image/webp'),
    },
  }
}

export default Post
