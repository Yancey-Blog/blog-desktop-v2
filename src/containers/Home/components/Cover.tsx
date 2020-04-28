import React, { FC } from 'react'
import styled from 'styled-components'
import { useEnableWebp } from 'src/hooks/useEnableWebp'
import { backgroundMixin } from 'src/styled/mixins'
import { PosterProps } from 'src/shared/types'
import { WEBP_SUFFIX } from 'src/shared/constants'
import { ICover } from '../types'

const Covers = styled.figure<PosterProps>`
  position: relative;
  margin-bottom: 3.2rem;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-attachment: fixed;
  ${backgroundMixin()};

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
  const { enableWebp } = useEnableWebp()

  return (
    <Covers
      imageUrl={
        enableWebp
          ? `${covers[0]?.coverUrl}${WEBP_SUFFIX}`
          : covers[0]?.coverUrl
      }
    />
  )
}

export default Cover
