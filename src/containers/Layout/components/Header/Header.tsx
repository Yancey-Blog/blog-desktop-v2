import { FC } from 'react'
import Link from 'next/link'
import { SVG_SPRITE } from 'src/shared/constants'
import { IGlobalSetting } from 'src/containers/GlobalSetting/types'
import { Logo, NavBar, NavBarItem } from './styled'

interface Props {
  globalSetting: IGlobalSetting
}

const Header: FC<Props> = ({ globalSetting }) => {
  const { cvPostId } = globalSetting

  return (
    <NavBar>
      <Link href="/" passHref>
        <Logo />
      </Link>
      <NavBarItem>
        <Link href="/">
          <a>
            <svg>
              <use xlinkHref={SVG_SPRITE.home} />
            </svg>
            Home
          </a>
        </Link>
        <Link href="/post">
          <a>
            <svg>
              <use xlinkHref={SVG_SPRITE.blog} />
            </svg>
            Blog
          </a>
        </Link>
        <Link href="/archive">
          <a>
            <svg>
              <use xlinkHref={SVG_SPRITE.archive} />
            </svg>
            Archive
          </a>
        </Link>
        <Link href="/music">
          <a>
            <svg>
              <use xlinkHref={SVG_SPRITE.music} />
            </svg>
            Music
          </a>
        </Link>
        <Link href="/post/[id]" as={`/post/${cvPostId}`}>
          <a>
            <svg>
              <use xlinkHref={SVG_SPRITE.cv} />
            </svg>
            About
          </a>
        </Link>
      </NavBarItem>
    </NavBar>
  )
}

export default Header
