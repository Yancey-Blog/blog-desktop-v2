import React, { FC } from 'react'
import styled from 'styled-components'
import { backgroundMixin } from 'src/styled/mixins'
import { ICover } from '../types'

interface Props {
  covers: ICover[]
}

const Cover: FC<Props> = ({ covers }) => {
  const Covers = styled.figure`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url(${covers[0]?.coverUrl});
    background-attachment: fixed;
    ${backgroundMixin()};
    margin-top: -${({ theme }) => theme.headerHeight};
  `

  return <Covers />
}

export default Cover
