import React, { FC } from 'react'
import styled from 'styled-components'
import MoonIcon from '../../../static/moon.svg'
import SunIcon from '../../../static/sun.svg'

interface Props {
  theme: string
  onToggle: Function
}

interface ButtonProps {
  readonly lightTheme: boolean
}

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 3rem;

  position: fixed;
  top: 0.75rem;
  right: 1.4rem;
  z-index: 200;
`

const Image = styled.img<ButtonProps>`
  height: auto;
  width: 2rem;
  transition: all 0.3s linear;

  &:first-child {
    transform: ${({ lightTheme }) =>
      lightTheme ? 'translateY(-2px)' : 'translateY(100px)'};
  }

  &:nth-child(2) {
    transform: ${({ lightTheme }) =>
      lightTheme ? 'translateY(-100px)' : 'translateY(-2px)'};
  }
`

const ToggleTheme: FC<Props> = ({ theme, onToggle }) => {
  return (
    <ToggleContainer onClick={() => onToggle()}>
      <Image src={SunIcon} alt="SunIcon" lightTheme={theme === 'light'} />
      <Image src={MoonIcon} alt="MoonIcon" lightTheme={theme === 'light'} />
    </ToggleContainer>
  )
}

export default ToggleTheme
