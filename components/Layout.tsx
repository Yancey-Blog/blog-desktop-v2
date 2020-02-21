import React, { FC } from 'react'
import Head from './Head'
import Header from './Header/Header'
import Footer from './Footer'

const Layout: FC = props => {
  const { children } = props

  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Head />
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </section>
  )
}

export default Layout
