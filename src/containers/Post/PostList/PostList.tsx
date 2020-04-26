import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import Pagination from '@material-ui/lab/Pagination'
import ImageHeader from 'src/components/ImageHeader/ImageHeader'
import PostCard from '../components/PostCard/PostCard'
import Top7PVPosts from '../components/Top7PVPosts/Top7PVPosts'
import TagCloud from '../components/TagCloud/TagCloud'
import { POSTS, GET_TOP_PV_POSTS, GET_ALL_TAGS } from '../typeDefs'
import {
  PostQuery,
  PostVars,
  GetTopPVPostsQuery,
  GetTopPVPostsVars,
  GetAllTagsQuery,
} from '../types'
import { PostContent, PostItemContainer } from './styled'

const PostList: FC = () => {
  const {
    query: { title: searchTitle, tag: searchTag },
  } = useRouter()

  const [page, setPage] = useState(1)

  const [getPosts, { loading, data: posts }] = useLazyQuery<
    PostQuery,
    PostVars
  >(POSTS, {
    fetchPolicy: 'cache-and-network',
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

  const fetchPosts = (currPage = 1, title?: string, tag?: string) => {
    getPosts({
      variables: {
        input: {
          page: currPage,
          pageSize: 10,
          title,
          tag,
        },
      },
    })
  }

  // @ts-ignore
  const handlePageChange = (e: ChangeEvent<unknown>, val: number) => {
    setPage(val)
    fetchPosts(val, searchTitle as string, searchTag as string)
  }

  useEffect(() => {
    setPage(1)
    fetchPosts(1, searchTitle as string, searchTag as string)
  }, [searchTitle, searchTag])

  // if (!posts) return <div>loading...</div>

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

          {loading || (
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
          <Top7PVPosts
            topPVPosts={topPVPosts ? topPVPosts.getTopPVPosts : []}
          />

          <TagCloud tagCloud={tagCloud ? tagCloud.getAllTags.tags : []} />
        </div>
      </PostContent>
    </>
  )
}

export default PostList
