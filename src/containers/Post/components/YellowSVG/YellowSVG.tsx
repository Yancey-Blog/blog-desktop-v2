import { FC } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  position: absolute;
  top: -3%;
  z-index: ${({ theme }) => theme.zIndex.negative};

  & path {
    fill: ${({ theme }) => theme.postSvg};
  }
`

const YellowSVG: FC = () => (
  <Svg width="2000" height="2000" viewBox="0 0 600 600">
    <g transform="translate(300,300)">
      <path d="M67.5,-106.7C77.5,-57.5,68.8,-28.8,79.8,11.1C90.9,50.9,121.8,101.8,111.8,133C101.8,164.2,50.9,175.6,-4,179.6C-58.9,183.6,-117.9,180.2,-163,149C-208.2,117.9,-239.6,58.9,-242.4,-2.8C-245.2,-64.6,-219.5,-129.2,-174.3,-178.3C-129.2,-227.5,-64.6,-261.2,-17.9,-243.3C28.8,-225.4,57.5,-155.8,67.5,-106.7Z" />
    </g>
  </Svg>
)

export default YellowSVG
