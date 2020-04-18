import React, { FC } from 'react'
import Link from 'next/link'
import { Home, Headset, LibraryBooks, Archive, Face } from '@material-ui/icons'
import { Logo, NavBar, NavBarItem } from './styled'

const Header: FC = () => {
  return (
    <NavBar>
      <Link href="/">
        <Logo />
      </Link>
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
        <Link href="/about">
          <a>
            <Face /> About
          </a>
        </Link>
      </NavBarItem>
    </NavBar>
  )
}

export default Header
