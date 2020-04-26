export interface IPostItem {
  _id: string
  posterUrl: string
  title: string
  summary: string
  content: string
  tags: string[]
  lastModifiedDate: string
  like: number
  pv: number
  createdAt: string
  updatedAt: string
  prev: IPostItem | null
  next: IPostItem | null
}

export interface IPost {
  total: number
  page: number
  pageSize: number
  items: IPostItem[]
}

export interface PostQuery {
  posts: IPost
}

export interface PostVars {
  input: {
    page: number
    pageSize: number
    title?: string
    tag?: string
  }
}

export interface GetPostByIdQuery {
  getPostById: IPostItem
}

export interface GetPostByIdVar {
  id: string
}

export interface GetTopPVPostsQuery {
  getTopPVPosts: IPostItem[]
}

export interface GetTopPVPostsVars {
  limit: number
}

export interface GetAllTagsQuery {
  getAllTags: { tags: string[] }
}

export interface UpdateLikeMutation {
  updateLike: IPostItem
}

export interface UpdateLikeVars {
  id: string
}

export interface UpdatePVMutation {
  updatePV: IPostItem
}

export interface UpdatePVVars {
  id: string
}

export interface IArchiveDay {
  id: string
  title: string
  pv: number
  createdAt: string
}

export interface IArchiveMonth {
  month: number
  days: IArchiveDay[]
}

export interface IArchive {
  _id: number
  months: IArchiveMonth[]
}

export interface ArchiveQuery {
  archive: IArchive[]
}
