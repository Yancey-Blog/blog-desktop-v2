import styled from 'styled-components'
import { flexMixin, transitionMixin, backgroundMixin } from 'src/styled/mixins'
import { wrench } from 'src/styled/animations'

export const NavBar = styled.nav`
  position: sticky;
  ${flexMixin('space-between')}
  padding:0 0.9rem;
  font-family: 'Ubuntu';
  background: ${({ theme }) => theme.background.primary};
  opacity: 0.95;
  box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);
`

export const NavBarItem = styled.div`
  display: flex;

  a {
    position: relative;
    ${flexMixin()}
    margin-left: 1.6rem;
    padding: 0 0.2rem;
    height: 5rem;
    font-size: 1.0666666666666667rem;
    color: ${({ theme }) => theme.link.primary};
    ${transitionMixin('color')}

    &:hover {
      color: ${({ theme }) => theme.link.secondary};
      ${transitionMixin('color')}

      &::after {
        width: 100%;
      }

      svg {
        fill: ${({ theme }) => theme.link.secondary};
        ${transitionMixin('fill')}
        animation: ${wrench} 2s ease infinite;
      }
    }

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.4rem;
      background: ${({ theme }) => theme.link.secondary};
      ${transitionMixin('width')}
    }
  }

  svg {
    margin-right: 8px;
    width: 20px;
    fill: ${({ theme }) => theme.link.primary};
    ${transitionMixin('fill')}
  }
`

export const Logo = styled.a`
  width: 14.666666666666666rem;
  height: 2.933333333333333rem;
  background: url('/static/logo-with-text.png');
  ${backgroundMixin()}
`
