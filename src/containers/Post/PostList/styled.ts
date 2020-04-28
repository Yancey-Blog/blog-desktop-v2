import styled from 'styled-components'

export const PostContent = styled.section`
  display: grid;
  grid-template-columns: 59rem 28rem;
  grid-column-gap: 3.6rem;
  justify-content: center;
  margin: 0 auto;

  .MuiPaginationItem-root {
    color: ${({ theme }) => theme.text.secondary};
    border-color: ${({ theme }) => theme.text.secondary};
  }
`

export const PostItemContainer = styled.div``
