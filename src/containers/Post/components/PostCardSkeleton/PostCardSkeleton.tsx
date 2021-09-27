import { FC } from 'react'
import { Skeleton } from '@mui/material'
import styled from 'styled-components'
import breakpoints from 'src/styled/breakpoints'

const PostCardSkeletonWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  height: 22rem;
  box-shadow: 0 1px 20px -8px ${({ theme }) => theme.colors.fiveOpcityBlack};

  .MuiSkeleton-root {
    background: ${({ theme }) => theme.background.skeleton};
  }

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
    text-align: left;
  }

  @media only screen and ${breakpoints.device.laptop} {
    flex-direction: column;
    margin: 1rem 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    &:nth-of-type(2n) {
      flex-direction: column;
    }
  }
`

const SummarySkeleton = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1.8rem 2.4rem;
  width: 26rem;

  @media only screen and ${breakpoints.device.laptop} {
    align-items: flex-start;
    padding: 1rem;
    width: 100%;
  }
`

const TitleSkeleton = styled.p`
  margin: 1.8rem 0;
`

const MetaSkeleton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  width: 100%;
`

const CoverSkeleton = styled.div`
  @media only screen and ${breakpoints.device.laptop} {
    height: 16rem;

    .MuiSkeleton-root {
      width: 100% !important;
    }
  }
`

const MoreSkeleton = styled.div`
  @media only screen and ${breakpoints.device.laptop} {
    display: none;
  }
`

const PostCardSkeleton: FC = () => {
  return (
    <PostCardSkeletonWrapper>
      <CoverSkeleton>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="33rem"
          height="100%"
        />
      </CoverSkeleton>

      <SummarySkeleton>
        <Skeleton
          animation="wave"
          variant="text"
          width="14rem"
          height="0.8rem"
        />
        <TitleSkeleton>
          <Skeleton
            animation="wave"
            variant="text"
            width="18rem"
            height="0.8rem"
          />
        </TitleSkeleton>
        <MetaSkeleton>
          <Skeleton
            animation="wave"
            variant="text"
            width="4rem"
            height="0.8rem"
          />
          <Skeleton
            animation="wave"
            variant="text"
            width="4rem"
            height="0.8rem"
          />
          <Skeleton
            animation="wave"
            variant="text"
            width="4rem"
            height="0.8rem"
          />
        </MetaSkeleton>
        <Skeleton
          animation="wave"
          variant="text"
          width="100%"
          height="0.8rem"
          style={{ marginBottom: '0.6rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="100%"
          height="0.8rem"
          style={{ marginBottom: '0.6rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="100%"
          height="0.8rem"
          style={{ marginBottom: '0.6rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="100%"
          height="0.8rem"
          style={{ marginBottom: '0.6rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="100%"
          height="0.8rem"
          style={{ marginBottom: '0.6rem' }}
        />

        <MoreSkeleton>
          <Skeleton
            animation="wave"
            variant="text"
            width="20%"
            height="0.8rem"
            style={{ marginTop: '1.6rem', marginBottom: '0.6rem' }}
          />
        </MoreSkeleton>
      </SummarySkeleton>
    </PostCardSkeletonWrapper>
  )
}

export default PostCardSkeleton
