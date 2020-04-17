import React, { FC } from 'react'
import styled from 'styled-components'
import { SOCIAL_MEDIA } from 'src/shared/constants'
import { flexMixin } from 'src/styled/mixins'
import { IMotto } from '../types'
import svgIcons from '../../../../static/yancey-official-blog-svg-icons.svg'

export const MottoBar = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.halfOpcityBlack};
  padding: 1rem 1.6rem;
  border-radius: 0.7rem;
`

export const MottoContent = styled.p`
  margin-bottom: 1.4rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const UpTriangle = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  border: 1rem solid transparent;
  border-bottom-color: ${({ theme }) => theme.colors.halfOpcityBlack};
  top: -2rem;
  left: 5rem;
`

export const SocialMediaIconWrapper = styled.div`
  ${flexMixin()}
`

export const Svg = styled.svg`
  width: 1.3rem;
  height: 1.3rem;
  margin: 0 1rem;
  cursor: pointer;
`

interface Props {
  mottos: IMotto[]
}

const Motto: FC<Props> = ({ mottos }) => {
  return (
    <MottoBar>
      <UpTriangle />
      <MottoContent>{mottos[0]?.content}</MottoContent>

      <SocialMediaIconWrapper>
        {Object.keys(SOCIAL_MEDIA).map((key) => (
          <a
            key={key}
            href={SOCIAL_MEDIA[key].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg>
              <use xlinkHref={`${svgIcons}${SOCIAL_MEDIA[key].icon}`} />
            </Svg>
          </a>
        ))}
      </SocialMediaIconWrapper>
    </MottoBar>
  )
}

export default Motto
