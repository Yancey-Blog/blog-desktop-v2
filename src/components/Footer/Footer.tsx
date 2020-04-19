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
          <Link href={`/p/${releasePostId}`}>
            <InnerLink>Changed Log</InnerLink>
          </Link>
          <Link href="privacy-policy">
            <InnerLink>Privacy Policy</InnerLink>
          </Link>
          <Link href="apps">
            <InnerLink>Apps</InnerLink>
          </Link>
          <InnerLink href={SOCIAL_MEDIA.email.url}>Contact</InnerLink>
        </nav>
      </FooterBottom>
    </FooterWrapper>
  )
}

export default Footer
