import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { SOCIAL_MEDIA } from 'src/shared/constants'
import { flexMixin } from 'src/styled/mixins'
import { IMotto } from '../types'
import svgIcons from '../../../../static/yancey-official-blog-svg-icons.svg'

export const QRCode = css`
  &::after,
  &::before {
    position: absolute;
    content: '';
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, 16px, 0);
    transition: 700ms all ease;
  }

  &::after {
    width: 120px;
    height: 120px;
    padding: 10px;
    border-radius: 12px;
    background-size: cover;
    background-origin: content-box;
    top: 62px;
    left: -58px;
  }

  &::before {
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-bottom-color: rgba(0, 0, 0, 0.5);
    top: 30px;
    left: -4px;

    background: rgba(0, 0, 0, 0.5)
      url(https://static.yancey.app/blog-fe-static/official-account-qr-code.jpg)
      no-repeat center top;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
    transition: 700ms all ease;
  }
`

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

export const Link = styled.a`
  position: relative;

  &::after,
  &::before {
    position: absolute;
    content: '';
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, 16px, 0);
    transition: 700ms all ease;
  }

  &::after {
    width: 120px;
    height: 120px;
    padding: 10px;
    border-radius: 12px;
    top: 62px;
    left: -44px;
    background: rgba(0, 0, 0, 0.5)
      url(https://static.yancey.app/blog-fe-static/official-account-qr-code.jpg)
      no-repeat center top;
    background-size: cover;
    background-origin: content-box;
  }

  &::before {
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-bottom-color: rgba(0, 0, 0, 0.5);
    top: 30px;
    left: 10px;
  }

  &:hover {
    &::after,
    &::before {
      opacity: 1;
      visibility: visible;
      transform: translate3d(0, 0, 0);
      transition: 700ms all ease;
    }
  }
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
          <Link
            key={key}
            href={SOCIAL_MEDIA[key].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg>
              <use xlinkHref={`${svgIcons}${SOCIAL_MEDIA[key].icon}`} />
            </Svg>
          </Link>
        ))}
      </SocialMediaIconWrapper>
    </MottoBar>
  )
}

export default Motto
