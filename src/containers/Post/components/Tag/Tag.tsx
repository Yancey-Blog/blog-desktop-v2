import React, { FC } from 'react'
import styled from 'styled-components'

const TagEl = styled.span`
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

const Tag: FC = ({ children }) => <TagEl>{children}</TagEl>

export default Tag
