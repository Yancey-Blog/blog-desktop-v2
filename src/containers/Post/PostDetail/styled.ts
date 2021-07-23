import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'

export const PostDetailWrapper = styled.article`
  position: relative;
  margin: 10rem auto 0;
`

export const Poster = styled.img`
  ${flexMixin()}
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px ${({ theme }) => theme.colors.oneOpcityBlack},
    0 4px 6px -2px ${({ theme }) => theme.colors.oneOpcityBlack};
`

export const Title = styled.h1`
  margin: 2rem 0;
  font-size: 2.6rem;
  text-align: center;
`

export const Summary = styled.blockquote`
  margin: 2rem 0 4rem 0;
  padding: 1.2rem;
  font-size: 1.2rem;
  border-radius: 10px;
  line-height: 1.8;
  background: 0 0;
  border: none;
  border: 2px solid ${({ theme }) => theme.text.secondary};
  box-shadow: 0.4rem 0.4rem 0 0 ${({ theme }) => theme.text.secondary};
`

export const Content = styled.article`
  max-width: 58rem;
  margin: 0 auto;

  h2 {
    margin: 2.5rem 0 1.25rem;
    font-size: 2rem;
  }

  h3 {
    margin: 1.875rem 0 1.25rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1.25rem;
    font-size: 1rem;
    line-height: 1.65;

    code {
      background: ${({ theme }) => theme.background.inlineCode};
      font-size: 90%;
      border-radius: 0.4rem;
      padding: 0.2rem 0.4rem;
    }
  }

  pre {
    font-size: 90%;
    margin: 2rem 0;
    border-radius: 0.4rem;
    padding: 1rem !important;
    line-height: 1.5;
    background-color: rgb(40, 44, 52) !important;
  }

  img {
    display: block;
    margin: 0 auto 1rem;
  }

  iframe {
    margin: 2rem 0;
    height: 35rem;
  }

  table {
    border-collapse: collapse;
  }

  tr {
    &:nth-of-type(2n) {
      background-color: ${({ theme }) => theme.background.secondary};
    }
  }

  td,
  th {
    line-height: 1.4;
    border: 1px solid ${({ theme }) => theme.border};
    padding: 0.8rem;
  }

  th {
    font-weight: 700;
  }

  a {
    position: relative;
    color: ${({ theme }) => theme.colors.linkBase};

    &:hover {
      text-decoration: underline ${({ theme }) => theme.colors.linkBase};
    }
  }

  ul {
    padding-left: 2rem;
  }

  li {
    line-height: 1.6;
  }
`

export const ImageGroup = styled.figure`
  display: block;
  margin: 3.5rem 0;
  text-align: center;
`

export const ImageAlt = styled.figcaption`
  display: inline-block;
  padding-bottom: 0.4rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.secondary};
  border-bottom: 1px dashed ${({ theme }) => theme.text.secondary};
`

export const Menu = styled.aside`
  position: fixed;
  top: 20rem;
  left: 0;

  .toc-link {
    font-size: 1rem;
    color: ${({ theme }) => theme.text.primary};
  }

  .toc-list {
    padding-left: 1rem;
    line-height: 1.6;
    list-style-type: none;
  }

  .is-active-link {
    color: ${({ theme }) => theme.colors.orange};

    &::before {
      background: ${({ theme }) => theme.colors.orange};
    }
  }
`

export const TableWrapper = styled.p`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`
