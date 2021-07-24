import { FC, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { SVG_SPRITE } from 'src/shared/constants'
import PostCard from 'src/containers/Post/components/PostCard/PostCard'
import { POSTS } from 'src/containers/Post/typeDefs'
import { PostQuery, PostVars, IPostItem } from 'src/containers/Post/types'
import InfiniteScroll from 'src/components/InfiniteScroll/InfiniteScroll'
import SubTitle from './SubTitle'

interface Props {
  isSupportWebp: boolean
}

interface List {
  posts: IPostItem[]
}

const PostList: FC<Props> = ({ isSupportWebp }) => {
  const [data, setData] = useState<List>({ posts: [] })
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const [getPosts, { loading }] = useLazyQuery<PostQuery, PostVars>(POSTS, {
    onCompleted(continuousPosts) {
      const { items, total, page: currentPage } = continuousPosts.posts
      if (Math.ceil(total / 10) === currentPage) {
        setHasMore(false)
      }
      setPage((_page) => _page + 1)
      setData({ posts: data.posts.concat(items) })
    },
  })

  const fetchPosts = (tag?: string) => {
    if (loading) return

    getPosts({
      variables: {
        input: {
          page,
          pageSize: 10,
          tag,
        },
      },
    })
  }

  return (
    <InfiniteScroll
      hasMoreData={hasMore}
      isLoading={loading}
      onBottomHit={fetchPosts}
      loadOnMount
    >
      <SubTitle icon={SVG_SPRITE.new} title="The Latest!" />

      {data.posts.map((post: IPostItem) => (
        <PostCard isSupportWebp={isSupportWebp} post={post} key={post._id} />
      ))}
    </InfiniteScroll>
  )
}

export default PostList
