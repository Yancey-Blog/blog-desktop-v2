import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const TagEl = styled.span`
  display: inline-block;
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  padding: 0 0.375rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.postTagColor};
  background-color: ${({ theme }) => theme.colors.postTagBg};
  border-radius: 0.1875rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.postTagBgHover};
  }
`

interface Props {
  tag: string
}

const Tag: FC<Props> = ({ tag }) => (
  <Link href={`/post?tag=${tag}`} key={tag}>
    <a>
      <TagEl>{tag}</TagEl>
    </a>
  </Link>
)

export default Tag
