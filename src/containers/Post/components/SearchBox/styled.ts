import styled from 'styled-components'

export const SearchBoxWrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
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
