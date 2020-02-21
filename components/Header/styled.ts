import styled from 'styled-components'
import { flexMixin } from '../../lib/mixins'

export const Header = styled.header`
  ${flexMixin()}
  width: 100%;
  height: 65px;
  font-family: 'Ubuntu';
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);
`

export const NavLink = styled.div`
  display: flex;
  position: relative;
  margin-right: 24px;
  padding: 0 4px;
  height: 65px;

  &:hover {
    &::after {
      width: 100%;
    }

    a {
      color: #ffa500;
      transition: color 300ms ease;
    }

    svg {
      fill: #ffa500;
      transition: fill 300ms ease;
    }
  }

  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 4px;
    background: #ffa500;
    bottom: 0;
    left: 0;
    transition: width 300ms ease;
  }

  a {
    ${flexMixin()}
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: color 300ms ease;
  }

  svg {
    margin-right: 8px;
    width: 20px;
    fill: #666666;
    transition: fill 300ms ease;
  }
`

export const NavLinkTxt = styled.span`
  font-size: 16px;
`
