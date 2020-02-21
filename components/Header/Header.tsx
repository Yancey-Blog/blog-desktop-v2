import React from 'react'
import Link from 'next/link'
import {
  Home,
  Headset,
  LibraryBooks,
  Archive,
  Apps,
  Face,
} from '@material-ui/icons'
import { Header, NavLink, NavLinkTxt } from './styled'

export default () => (
  <Header>
    <NavLink>
      <Link href="/">
        <a>
          <Home />
          <NavLinkTxt>Home</NavLinkTxt>
        </a>
      </Link>
    </NavLink>
    <NavLink>
      <Link href="/blog">
        <a>
          <LibraryBooks />
          <NavLinkTxt>Blog</NavLinkTxt>
        </a>
      </Link>
    </NavLink>
    <NavLink>
      <Link href="/archive">
        <a>
          <Archive />
          <NavLinkTxt>Archive</NavLinkTxt>
        </a>
      </Link>
    </NavLink>
    <NavLink>
      <Link href="/music">
        <a>
          <Headset />
          <NavLinkTxt>Music</NavLinkTxt>
        </a>
      </Link>
    </NavLink>
    <NavLink>
      <Link href="/apps">
        <a>
          <Apps />
          <NavLinkTxt>Apps</NavLinkTxt>
        </a>
      </Link>
    </NavLink>
    <NavLink>
      <Link href="/cv">
        <a>
          <Face />
          <NavLinkTxt>CV</NavLinkTxt>
        </a>
      </Link>
    </NavLink>
  </Header>
)
