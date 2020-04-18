import React, { FC } from 'react'
import styled from 'styled-components'
// import { ReactComponent as MoonIcon } from '../../../static/moon.svg'
// import { ReactComponent as SunIcon } from '../../../static/sun.svg'

interface Props {
  theme?: string
  toggleTheme: Function
}

const ToggleContainer = styled.button`
  /* background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder}; */
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
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

  }
`

const ToggleLightDarkTheme: FC<Props> = ({ toggleTheme }) => {
  // const isLight = theme === 'light'
  return (
    <ToggleContainer
      // @ts-ignore
      onClick={toggleTheme}
    >
      {/* <SunIcon />
      <MoonIcon /> */}
    </ToggleContainer>
  )
}

export default ToggleLightDarkTheme
