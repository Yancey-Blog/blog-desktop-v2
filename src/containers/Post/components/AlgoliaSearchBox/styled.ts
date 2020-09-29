import styled from 'styled-components'

export const Result = styled.div`
  position: fixed;
  top: 4.5rem;
  right: 0;
  width: 29.2rem;
  height: 100%;
  background: #fff;
  box-shadow: 0 2px 64px 0 rgba(0, 0, 0, 0.15);
  z-index: 201;
  height: 100%;
  overflow-y: scroll;
  transform: translateX(30rem);
  transition: transform 250ms ease;

  &.showSearchResultDrawer {
    transform: translateX(0);
    transition: transform 250ms ease;
  }
`

export const SearchBoxWrapper = styled.div`
  position: relative;
`

export const Input = styled.div`
  margin-left: 1.6rem;
  padding: 0.8rem;
  width: 13rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text.primary};
  border-radius: 0.3rem;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.text.primary};
  }
`

export const SearchSvg = styled.svg`
  position: absolute;
  margin: 0 !important;
  top: 0.73rem;
  right: 0.73rem;
  width: 1.2rem !important;
  height: 1.2rem !important;
  fill: ${({ theme }) => theme.text.header};
  cursor: pointer;
`
