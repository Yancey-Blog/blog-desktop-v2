import styled from 'styled-components'

export const Article = styled.article`
  margin: 0 auto;
  max-width: 60rem;
  color: ${({ theme }) => theme.text.header};

  h1 {
    margin-bottom: 4.6rem;
    font-size: 2.5rem;
    font-weight: 300;
  }
  h2 {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  p {
    margin: 1.6rem 0;
    font-size: 1.1rem;
    text-shadow: 0 0 1px rgba(44, 46, 47, 0.1);
    line-height: 1.8;
    font-weight: 300;

    color: ${({ theme }) => theme.text.primary};
    a {
      color: ${({ theme }) => theme.colors.linkBlue};
    }
    span {
      font-weight: bold;
    }
  }
`

export const Menu = styled.ul`
  margin-bottom: 3rem;
  margin-left: 0;
  font-size: 1.5rem;
  list-style-type: disc;

  li {
    margin: 1.5rem 0;
    a {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.linkBlue};
    }
  }
`

export const DetailList = styled.ul`
  margin-left: 1.7rem;
  font-size: 1.4rem;
  li {
    list-style-type: disc;
  }
`

export const UpdateDate = styled.time`
  margin-top: 1.2rem;
  font-size: 0.8rem;
  font-weight: bold;
`

export const Anchor = styled.span`
  display: block;
  height: 5.2rem;
  margin-top: -5.2rem;
  visibility: hidden;
`
