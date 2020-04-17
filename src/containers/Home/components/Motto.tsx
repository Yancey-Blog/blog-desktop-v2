import React, { FC } from 'react'
import styled from 'styled-components'
import { SOCIAL_MEDIA } from 'src/shared/constants'
import { IMotto } from '../types'
import svgIcons from '../../../../static/yancey-official-blog-svg-icons.svg'

export const MottoBar = styled.section`
  position: relative;
  z-index: 1;
  max-width: 27rem;
  margin: 0 auto;
  background: rgba(#000, 0.5);
  padding: 1rem;
  border-radius: 10px;
`

export const MottoContent = styled.p`
  display: block;
  width: 24rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const UpTriangle = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  border: 18px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.5);
  top: -36px;
  left: 80px;
`

interface Props {
  mottos: IMotto[]
}

const Motto: FC<Props> = ({ mottos }) => {
  return (
    <MottoBar>
      <UpTriangle />
      <MottoContent>{mottos[0]?.content}</MottoContent>

      {Object.keys(SOCIAL_MEDIA).map((key) => (
        <svg key={key}>
          <use xlinkHref={`${svgIcons}${SOCIAL_MEDIA[key].icon}`} />
        </svg>
      ))}
    </MottoBar>
  )
}

export default Motto
