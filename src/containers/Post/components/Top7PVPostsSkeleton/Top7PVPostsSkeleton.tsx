import React, { FC } from 'react'
import { Skeleton } from '@material-ui/lab'
import styled from 'styled-components'

const Top7PVPostsSkeletonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.9rem;
  background-color: rgba(245, 245, 245, 0.8);
  border-radius: 0.6rem;
`

const Top7PVPostsSkeleton: FC = () => {
  return (
    <Top7PVPostsSkeletonWrapper>
      <div>
        <Skeleton
          animation="wave"
          variant="text"
          width="12rem"
          height="0.8rem"
          style={{ marginBottom: '2rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="17rem"
          height="0.8rem"
        />
      </div>
      <Skeleton
        animation="wave"
        variant="rect"
        width="4rem"
        height="4rem"
        style={{ borderRadius: '0.6rem' }}
      />
    </Top7PVPostsSkeletonWrapper>
  )
}

export default Top7PVPostsSkeleton
