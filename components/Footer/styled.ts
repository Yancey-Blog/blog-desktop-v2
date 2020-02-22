import styled from 'styled-components'
// import { flexMixin, transitionMixin } from '../../lib/mixins'

export const Footer = styled.footer`
  margin: 36px auto;
  width: 800px;
  font-family: 'Ubuntu';
`

export const CopyRight = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
`

export const TechStacks = styled.p`
  font-size: 15px;
  font-weight: bold;
`

export const Divider = styled.hr`
  box-sizing: content-box;
  margin: 7px 0 14px;
  padding: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #b7bcbf 50%, rgba(255, 255, 255, 0) 40%)
    repeat-x top;
  background-size: 3px 1px;
  border-top: 0;
  border-bottom: 0;
`
