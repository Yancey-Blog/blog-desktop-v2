import { FC, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { SVG_SPRITE } from 'src/shared/constants'
import PostCard from 'src/containers/Post/components/PostCard/PostCard'
import PostCardSkeleton from 'src/containers/Post/components/PostCardSkeleton/PostCardSkeleton'
import SkeletonIterator from 'src/components/SkeletonIterator/SkeletonIterator'
import { POSTS } from 'src/containers/Post/typeDefs'
import { PostQuery, PostVars, IPostItem } from 'src/containers/Post/types'
import InfiniteScroll from 'src/components/InfiniteScroll/InfiniteScroll'
import SubTitle from './SubTitle'
import { Status } from '../styled'

interface List {
  posts: IPostItem[]
}

const PostList: FC = () => {
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

      {data.posts.length === 0 ? (
        <SkeletonIterator count={3} skeletonComponent={PostCardSkeleton} />
      ) : (
        data.posts.map((post: IPostItem) => (
          <PostCard post={post} key={post._id} />
        ))
      )}

      <Status>
        {
          // eslint-disable-next-line no-nested-ternary
          data.posts.length > 0 && loading
            ? '正在加载中...'
            : hasMore
            ? ''
            : '没有更多了...'
        }
      </Status>
    </InfiniteScroll>
  )
}

export default PostList
