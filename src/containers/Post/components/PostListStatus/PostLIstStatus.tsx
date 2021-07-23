import { FC } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'

const StatusWrapper = styled.div`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text.primary};
  text-align: center;
`

const StatusContainer = styled.p`
  ${flexMixin()}
`

const BoldSpan = styled.span`
  margin-left: 0.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.post};
`

const ResetBtn = styled.button`
  margin-left: 1.4rem;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.primary};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.sloganRed};
  border-radius: 2rem;
  cursor: pointer;
`

interface Props {
  searchTag: string
  postsLength: number | undefined
  fetchPosts: Function
}

const PostListStatus: FC<Props> = ({ searchTag, postsLength, fetchPosts }) => {
  const { push } = useRouter()
  const onReset = () => {
    push('/post')
    fetchPosts()
  }

  const StatusItem = (msg: string, content?: string) => (
    <StatusContainer>
      {msg} {content && <BoldSpan>{content}</BoldSpan>}
      <ResetBtn type="submit" onClick={onReset}>
        Reset
      </ResetBtn>
    </StatusContainer>
  )

  return (
    <StatusWrapper>
      {postsLength !== 0 && searchTag && StatusItem('current tag:', searchTag)}
      {postsLength === 0 && StatusItem('We couldn’t find relative posts.')}
    </StatusWrapper>
  )
}

export default PostListStatus
