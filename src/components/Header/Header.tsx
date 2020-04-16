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
import { NavBar, NavBarItem } from './styled'

export default () => (
  <NavBar>
    <NavBarItem>
      <Link href="/">
        <a>
          <Home /> Home
        </a>
      </Link>
      <Link href="/blog">
        <a>
          <LibraryBooks /> Blog
        </a>
      </Link>
      <Link href="/archive">
        <a>
          <Archive /> Archive
        </a>
      </Link>
      <Link href="/music">
        <a>
          <Headset /> Music
        </a>
      </Link>
      <Link href="/apps">
        <a>
          <Apps /> Apps
        </a>
      </Link>
      <Link href="/about">
        <a>
          <Face /> About
        </a>
      </Link>
    </NavBarItem>
  </NavBar>
)
