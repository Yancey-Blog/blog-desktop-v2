import React, { FC } from 'react'
import styled from 'styled-components'
import { backgroundMixin } from 'src/styled/mixins'
import { PosterProps } from 'src/shared/types'
import { ICover } from '../types'

const Covers = styled.figure<PosterProps>`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-attachment: fixed;
  ${backgroundMixin()};
  /* margin-top: -${({ theme }) => theme.headerHeight}; */
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
  return <Covers imageUrl={covers[0]?.coverUrl} />
}

export default Cover
