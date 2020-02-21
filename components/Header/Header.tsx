import React from 'react'
import Link from 'next/link'
import Header from './styled'

export default () => (
  <Header>
    <Link href="/">
      <a>home </a>
    </Link>
    <Link href="/music">
      <a>music</a>
    </Link>
  </Header>
)
