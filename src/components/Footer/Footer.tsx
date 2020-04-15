import React from 'react'
import Link from 'next/link'
import { Favorite } from '@material-ui/icons'
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
      Crafted with <Favorite /> by Yancey
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
        <InnerLink href={SOCIAL_MEDIA.email}>Contact</InnerLink>
      </nav>
    </FooterBottom>
  </Footer>
)
