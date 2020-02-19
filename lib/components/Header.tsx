import React from 'react'
import Link from 'next/link'

export default () => (
  <header
    style={{
      width: '100%',
      height: '60px',
      background: 'green',
    }}
  >
    <Link href="/">
      <a>home </a>
    </Link>
    <Link href="/music">
      <a>music</a>
    </Link>
  </header>
)
