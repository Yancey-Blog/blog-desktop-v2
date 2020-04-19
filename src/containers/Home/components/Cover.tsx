import React, { FC } from 'react'
import styled from 'styled-components'
import { backgroundMixin } from 'src/styled/mixins'
import { ICover } from '../types'

const Covers = styled.figure`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  ${backgroundMixin()};
  margin-top: -${({ theme }) => theme.headerHeight};
  margin-bottom: 3.2rem;

  /* &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: url('/static/dot.gif');
  } */
`

interface Props {
  covers: ICover[]
}

const Cover: FC<Props> = ({ covers }) => {
  return <Covers style={{ backgroundImage: `url(${covers[0]?.coverUrl})` }} />
}

export default Cover
