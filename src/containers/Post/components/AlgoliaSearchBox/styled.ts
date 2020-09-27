import styled from 'styled-components'

export const SearchBoxContainer = styled.section`
  position: fixed;
  top: 4.6rem;
  right: 0;
  width: 30rem;
  height: 100%;
  background: #fff;
  box-shadow: 0 2px 64px 0 rgba(0, 0, 0, 0.15);
  z-index: 2;
`

export const Result = styled.div`
  position: absolute;
  height: 100%;
  overflow-y: scroll;
`
