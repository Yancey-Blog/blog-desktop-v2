export interface IPostItem {
  _id: string
  posterUrl: string
  title: string
  summary: string
  content: string
  tags: string
  lastModifiedDate: string
  like: number
  pv: number
  createdAt: string
  updatedAt: string
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
  }
}
