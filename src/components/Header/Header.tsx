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
import { Header, NavLink } from './styled'

export default () => (
  <Header>
    <NavLink>
      <Link href="/">
        <a>
          <Home />
          Home
        </a>
      </Link>
    </NavLink>
    <NavLink>
      <Link href="/blog">
        <a>
          <LibraryBooks />
          Blog
        </a>
      </Link>
    </NavLink>
    <NavLink>
      <Link href="/archive">
        <a>
          <Archive />
          Archive
        </a>
      </Link>
    </NavLink>
    <NavLink>
      <Link href="/music">
        <a>
          <Headset />
          Music
        </a>
      </Link>
    </NavLink>
    <NavLink>
      <Link href="/apps">
        <a>
          <Apps />
          Apps
        </a>
      </Link>
    </NavLink>
    <NavLink>
      <Link href="/cv">
        <a>
          <Face />
          CV
        </a>
      </Link>
    </NavLink>
  </Header>
)
