import React, { FC } from 'react'
import { formatDate } from 'src/shared/utils'

interface Props {
  tags: string[]
  createdAt: string
  lastModifiedDate: string
  pv: number
  like: number
}

const PostMeta: FC<Props> = ({
  tags,
  createdAt,
  lastModifiedDate,
  pv,
  like,
}) => (
  <div>
    {tags.map((tag) => (
      <span key={tag}>{tag}, </span>
    ))}
    <time data-last-modified-date={formatDate(lastModifiedDate)}>
      {formatDate(createdAt)}
    </time>
    <span>{pv} PV</span>
    <span>{like} Like</span>

    <a
      href="https://twitter.com/YanceyOfficial?ref_src=twsrc%5Etfw"
      className="twitter-follow-button"
      data-show-count="false"
    >
      Follow @YanceyOfficial
    </a>
    <script async src="https://platform.twitter.com/widgets.js" />
  </div>
)

export default PostMeta
