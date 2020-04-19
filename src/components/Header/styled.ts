import styled from 'styled-components'
import {
  flexMixin,
  transitionMixin,
  backgroundMixin,
  animationMixin,
} from 'src/styled/mixins'
import { wrench } from 'src/styled/animations'
import { ALI_OSS_URL } from 'src/shared/constants'

export const HomeSVG = styled.svg`
  width: 1.2rem !important;
  height: 1.2rem !important;
`

export const NavBar = styled.nav`
  box-sizing: border-box;
  position: fixed;
  ${flexMixin('space-between')}
  width:100%;
  padding: 0 1.2rem;
  font-family: 'Ubuntu', sans-serif;
  background: ${({ theme }) => theme.background.primary};
  opacity: 0.95;
  box-shadow: 0 1px 40px -8px ${({ theme }) => theme.colors.fiveOpcityBlack};
  z-index: ${({ theme }) => theme.zIndex.fixed};
  ${transitionMixin('background', 250, 'linear')};
`

export const NavBarItem = styled.div`
  ${flexMixin('flex-start')}
  margin-right: 10rem;

  a {
    position: relative;
    ${flexMixin()}
    margin-left: 1.6rem;
    padding: 0 0.2rem;
    height: ${({ theme }) => theme.headerHeight};
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text.primary};
    ${transitionMixin('color')}

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
      ${transitionMixin('color')}

      &::after {
        width: 100%;
      }

      svg {
        fill: ${({ theme }) => theme.colors.orange};
        ${transitionMixin('fill')}
        ${animationMixin(wrench, 2000, 'ease', 'infinite')}
      }
    }

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.4rem;
      background: ${({ theme }) => theme.colors.orange};
      ${transitionMixin('width')}
    }
  }

  svg {
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    fill: ${({ theme }) => theme.text.primary};
    ${transitionMixin('fill')}
  }
`

export const Logo = styled.a`
  width: 14.67rem;
  height: 2.93rem;
background: url('${ALI_OSS_URL}/yancey-inc-logo/brand.png');
  cursor: pointer;
  ${backgroundMixin()}
`
