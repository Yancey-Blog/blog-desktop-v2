import { FC } from 'react'
import styled from 'styled-components'
import LazyLoadImage from 'src/components/LazyLoadImage/LazyLoadImage'

import { ICover } from '../types'

const Covers = styled.figure`
  position: relative;
  margin-bottom: 3.2rem;
  width: 100vw;
  height: 100vh;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('images/dot.png');
    background-repeat: repeat;
    opacity: 0.5;
  }
`

interface Props {
  isSupportWebp: boolean
  covers: ICover[]
}

const Cover: FC<Props> = ({ covers }) => {
  return (
    <Covers>
      <LazyLoadImage imageUrl={covers[0]?.coverUrl} alt="" />
    </Covers>
  )
}

export default Cover
