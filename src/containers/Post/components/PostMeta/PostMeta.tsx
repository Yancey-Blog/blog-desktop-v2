import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { formatDate } from 'src/shared/utils'

const MetaWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
`

const Tag = styled.span`
  display: inline-block;
  margin-right: 0.6rem;
  padding: 0 0.375rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.postTagColor};
  background-color: ${({ theme }) => theme.colors.postTagBg};
  border-radius: 0.1875rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.postTagBgHover};
  }
`

const Statistics = styled.span`
  margin-right: 1.2rem;
`

const Date = styled.time`
  position: relative;
  margin-right: 1.2rem;

  &:hover::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 0.6rem solid transparent;
    border-bottom-color: ${({ theme }) => theme.colors.sevenOpcityBlack};
    top: 0.6rem;
    left: 2.3rem;
  }

  &:hover::after {
    position: absolute;
    content: attr(data-last-modified-date);
    top: 1.8rem;
    left: -4rem;
    padding: 0.2rem 0.1rem;
    min-width: 14rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.sevenOpcityBlack};
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
}) => (
  <MetaWrapper>
    <Date
      data-last-modified-date={`last modified: ${formatDate(
        lastModifiedDate,
        'MMM D, YYYY',
      )}`}
    >
      {formatDate(createdAt, 'MMM D, YYYY')}
    </Date>
    <Statistics>{pv} PV</Statistics>
    <Statistics>
      {like} {like > 1 ? 'Likes' : 'Like'}
    </Statistics>
    {tags.map((tag) => (
      <Link href={`/tag/${tag}`} key={tag}>
        <a>
          <Tag>{tag}</Tag>
        </a>
      </Link>
    ))}
  </MetaWrapper>
)

export default PostMeta
