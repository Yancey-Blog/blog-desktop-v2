import { FC, useState, useEffect, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useLazyQuery } from '@apollo/client'
import { Pagination } from '@material-ui/lab'
import { ALI_OSS_FE_STATIC_PATH } from 'src/shared/constants'
import ImageHeader from 'src/components/ImageHeader/ImageHeader'
import SkeletonIterator from 'src/components/SkeletonIterator/SkeletonIterator'
import PostListStatus from '../components/PostListStatus/PostLIstStatus'
import PostCard from '../components/PostCard/PostCard'
import Top7PVPosts from '../components/Top7PVPosts/Top7PVPosts'
import TagCloud from '../components/TagCloud/TagCloud'
import PostCardSkeleton from '../components/PostCardSkeleton/PostCardSkeleton'
import { POSTS, GET_TOP_PV_POSTS, GET_ALL_TAGS } from '../typeDefs'
import {
  PostQuery,
  PostVars,
  GetTopPVPostsQuery,
  GetTopPVPostsVars,
  GetAllTagsQuery,
} from '../types'
import { PostContent, PostItemContainer } from './styled'

interface Props {
  isSupportWebp: boolean
}

const PostList: FC<Props> = ({ isSupportWebp }) => {
  const {
    query: { tag: searchTag },
  } = useRouter()

  const [page, setPage] = useState(1)

  const [getPosts, { data: posts }] = useLazyQuery<PostQuery, PostVars>(POSTS, {
    notifyOnNetworkStatusChange: true,
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

  const { data: tagCloud } = useQuery<GetAllTagsQuery>(GET_ALL_TAGS, {
    notifyOnNetworkStatusChange: true,
  })

  const fetchPosts = (currPage = 1, tag?: string) => {
    getPosts({
      variables: {
        input: {
          page: currPage,
          pageSize: 10,
          tag,
        },
      },
    })
  }

  // @ts-ignore
  const handlePageChange = (e: ChangeEvent<unknown>, val: number) => {
    setPage(val)
    fetchPosts(val, searchTag as string)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    setPage(1)
    fetchPosts(1, searchTag as string)
  }, [searchTag])

  return (
    <>
      <ImageHeader
        title="Tech and Poems."
        imageUrl={`/${ALI_OSS_FE_STATIC_PATH}/blog_page_header.jpg`}
      />

      <PostContent>
        <PostItemContainer>
          {searchTag && (
            <PostListStatus
              searchTag={searchTag as string}
              postsLength={posts && posts.posts.items.length}
              fetchPosts={fetchPosts}
            />
          )}

          {!posts ? (
            <SkeletonIterator count={5} skeletonComponent={PostCardSkeleton} />
          ) : (
            posts.posts.items.map((post) => (
              <PostCard
                post={post}
                key={post._id}
                isSupportWebp={isSupportWebp}
              />
            ))
          )}

          {posts && posts.posts.items.length !== 0 && (
            <Pagination
              count={
                !posts ? 0 : Math.ceil(posts.posts.total / posts.posts.pageSize)
              }
              color="primary"
              variant="outlined"
              page={page}
              onChange={handlePageChange}
            />
          )}
        </PostItemContainer>

        <div>
          <Top7PVPosts topPVPosts={topPVPosts} isSupportWebp={isSupportWebp} />
          <TagCloud tagCloud={tagCloud ? tagCloud.getAllTags.tags : []} />
        </div>
      </PostContent>
    </>
  )
}

export default PostList
