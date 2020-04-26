import React, { FC } from 'react'
import Link from 'next/link'
import { SVG_SPRITE, SOCIAL_MEDIA } from 'src/shared/constants'
import { IGlobalSetting } from 'src/containers/GlobalSetting/types'
import svgIcons from 'src/static/svg-sprite.svg'
import {
  FooterWrapper,
  Divider,
  TechStacks,
  CopyRight,
  InnerLink,
  FooterBottom,
  Email,
} from './styled'

interface Props {
  globalSetting: IGlobalSetting
}

const Footer: FC<Props> = ({ globalSetting }) => {
  const { releasePostId } = globalSetting

  return (
    <FooterWrapper>
      <TechStacks>
        Crafted with{' '}
        <svg>
          <use xlinkHref={`${svgIcons}${SVG_SPRITE.heart}`} />
        </svg>{' '}
        by Yancey
      </TechStacks>
      <Divider />
      <FooterBottom>
        <CopyRight>
          Copyright &copy; {new Date().getFullYear()} Yancey Inc. and its
          affiliates.
        </CopyRight>
        <nav>
          <Link href="/post/[id]" as={`/post/${releasePostId}`}>
            <a>
              <InnerLink>Chronicle of Events</InnerLink>
            </a>
          </Link>
          <Link href="/legal/privacy-policy">
            <a>
              <InnerLink>Privacy Policy</InnerLink>
            </a>
          </Link>
          <Email href={SOCIAL_MEDIA.email.url}>Contact Me</Email>
        </nav>
      </FooterBottom>
    </FooterWrapper>
  )
}

export default Footer
