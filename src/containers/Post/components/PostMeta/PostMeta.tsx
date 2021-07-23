import { FC } from 'react'
import styled from 'styled-components'
import { formatDate } from 'src/shared/utils'
import Tag from '../Tag/Tag'

const MetaWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
`

const Statistics = styled.span`
  margin-right: 1.2rem;
`

const CreatedAt = styled.time`
  position: relative;
  margin-right: 1.2rem;

  &:hover::before {
    position: absolute;
    content: '';
    top: 0.6rem;
    left: 5rem;
    width: 0;
    height: 0;
    border: 0.6rem solid transparent;
    border-bottom-color: ${({ theme }) => theme.background.tooltip};
  }

  &:hover::after {
    position: absolute;
    content: attr(data-last-modified-date);
    top: 1.8rem;
    left: -1.3rem;
    padding: 0.2rem;
    min-width: 14rem;
    text-align: center;
    color: ${({ theme }) => theme.text.tooltip};
    background: ${({ theme }) => theme.background.tooltip};
    border-radius: 0.4rem;
  }
`

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
}) => {
  return (
    <MetaWrapper>
      <CreatedAt
        data-last-modified-date={`Last Modified At: ${formatDate(
          lastModifiedDate,
        )}`}
      >
        Released At {formatDate(createdAt)}
      </CreatedAt>
      <Statistics>{pv} PV</Statistics>
      <Statistics>
        {like} {like > 1 ? 'Likes' : 'Like'}
      </Statistics>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </MetaWrapper>
  )
}

export default PostMeta
