import styled from 'styled-components'
import { flexMixin, transitionMixin } from '../../lib/mixins'

export const Header = styled.header`
  position: fixed;
  ${flexMixin()}
  width: 100%;
  font-family: 'Ubuntu';
  background: ${({ theme }) => theme.colors.background};
  opacity: 0.95;
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
      color: ${({ theme }) => theme.colors.orange};
      ${transitionMixin('color')}
    }

    svg {
      fill: ${({ theme }) => theme.colors.orange};
      ${transitionMixin('fill')}
    }
  }

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.orange};
    ${transitionMixin('width')}
  }

  a {
    ${flexMixin()}
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    ${transitionMixin('color')}
  }

  svg {
    margin-right: 8px;
    width: 20px;
    fill: ${({ theme }) => theme.colors.text};
    ${transitionMixin('fill')}
  }
`
