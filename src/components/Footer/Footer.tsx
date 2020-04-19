import React from 'react'
import Link from 'next/link'
import { SVG_SPRITE } from 'src/shared/constants'
import svgIcons from 'src/static/svg-sprite.svg'
import {
  Footer,
  Divider,
  TechStacks,
  CopyRight,
  InnerLink,
  FooterBottom,
} from './styled'
import { SOCIAL_MEDIA } from '../../shared/constants'

export default () => (
  <Footer>
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
        <Link href="about">
          <InnerLink>About</InnerLink>
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
  </Footer>
)
