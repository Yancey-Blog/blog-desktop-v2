import { FC, useState, useEffect, useRef } from 'react'
import { useLazyQuery } from '@apollo/client'
import { SVG_SPRITE } from 'src/shared/constants'
import PostCard from 'src/containers/Post/components/PostCard/PostCard'
import { POSTS } from 'src/containers/Post/typeDefs'
import { PostQuery, PostVars, IPostItem } from 'src/containers/Post/types'
import SubTitle from './SubTitle'

interface Props {
  isSupportWebp: boolean
}

const PostList: FC<Props> = ({ isSupportWebp }) => {
  const [dataSource, setPosts] = useState<IPostItem[]>([])
  const [pageNum, setPageNum] = useState(1)

  const indicatorRef = useRef<HTMLDivElement>(null)

  const [getPosts] = useLazyQuery<PostQuery, PostVars>(POSTS, {
    notifyOnNetworkStatusChange: true,
    onCompleted(continuousPosts) {
      setPageNum(continuousPosts.posts.page + 1)
      setPosts([...dataSource, ...continuousPosts.posts.items])
    },
  })

  const fetchPosts = (tag?: string) => {
    getPosts({
      variables: {
        input: {
          page: pageNum,
          pageSize: 10,
          tag,
        },
      },
    })
  }

  const callback = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]

    if (entry.isIntersecting) {
      fetchPosts()
    }
  }

  useEffect(() => {
    fetchPosts()

    if (indicatorRef.current) {
      const io = new IntersectionObserver(callback)
      io.observe(indicatorRef.current)
    }
  }, [])

  return (
    <>
      <SubTitle icon={SVG_SPRITE.new} title="The Latest!" />

      {dataSource.map((post: IPostItem) => (
        <PostCard isSupportWebp={isSupportWebp} post={post} key={post._id} />
      ))}

      <div ref={indicatorRef} />
    </>
  )
}

export default PostList
