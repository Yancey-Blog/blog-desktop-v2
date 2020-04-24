import styled from 'styled-components'
import { flexMixin } from '../../styled/mixins'

export const FooterWrapper = styled.footer`
  margin: 72px auto 36px;
  width: 800px;
`

export const CopyRight = styled.p`
  font-size: 13px;
`

export const TechStacks = styled.p`
  ${flexMixin('flex-start')}
  font-size: 15px;
  font-weight: 600;

  svg {
    margin: 0 4px;
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.heartRed};
  }
`

export const Divider = styled.hr`
  box-sizing: content-box;
  margin: 7px 0 14px;
  padding: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #666666 50%, rgba(255, 255, 255, 0) 40%)
    repeat-x top;
  background-size: 3px 1px;
  border: 0;
`

export const InnerLink = styled.span`
  font-size: 13px;
  margin-right: 16px;
`

export const Email = styled.a`
  font-size: 13px;
`

export const FooterBottom = styled.div`
  ${flexMixin('space-between')}
`
