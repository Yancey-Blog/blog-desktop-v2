import styled from 'styled-components'
import { backgroundMixin, flexMixin } from 'src/styled/mixins'
import { PosterProps } from 'src/shared/types'

export const PostDetailWrapper = styled.article`
  position: relative;
  margin: 10rem auto 0;
  font-family: 'Ubuntu', sans-serif;
  color: ${({ theme }) => theme.text.post};
`

export const Poster = styled.figure<PosterProps>`
  ${flexMixin()}
  height: 32rem;
  border-radius: 1rem;
  background-image: url(${({ imageUrl }) => imageUrl});
  ${backgroundMixin()}
  box-shadow: 0 10px 15px -3px ${({ theme }) =>
    theme.colors.oneOpcityBlack}, 0 4px 6px -2px ${({ theme }) =>
  theme.colors.oneOpcityBlack};
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
  max-width: 60rem;
  margin: 0 auto;

  h2,
  h3 {
    margin: 2rem 0;
  }

  h2 {
    font-size: 2.2rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    font-size: 1.1rem;
    line-height: 1.8;

    code {
      background: ${({ theme }) => theme.codeEl};
      color: ${({ theme }) => theme.colors.pink};
      border-radius: 2px;
      padding: 1px 6px;
    }
  }

  pre {
    margin: 2rem 0;
    border-radius: 0.8rem;
  }

  img {
    display: block;
    margin: 0 auto 1rem;
    max-width: 100%;
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
    color: ${({ theme }) => theme.colors.linkBlue};
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
    font-size: 1.1rem;
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
