import React, { FC } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: FC = props => {
  const { children } = props

  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </section>
  )
}

export default Layout
