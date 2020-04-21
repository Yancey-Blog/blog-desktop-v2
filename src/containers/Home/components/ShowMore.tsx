import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Button = styled.button`
  margin: 3rem 0;
  padding: 0.8rem 4.75rem;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.heartRed};
  background: ${({ theme }) => theme.background.primary};
  border: 2px solid ${({ theme }) => theme.colors.heartRed};
  border-radius: 1.75rem;
  transition-property: transform;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.31, 0.32, 0.38, 2);
  transition-delay: 0s, 0s, 0.15s;
  transform: scale3d(1, 1, 1);
  cursor: pointer;

  &:hover {
    transform: scale3d(1.05, 1.05, 1);
  }
`

const ShowMore = () => {
  return (
    <Link href="/post">
      <a>
        <Button>More</Button>
      </a>
    </Link>
  )
}

export default ShowMore
