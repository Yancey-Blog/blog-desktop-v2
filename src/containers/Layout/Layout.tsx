import React, { FC, useEffect } from 'react'
import { initGA, logPageView } from 'src/shared/analytics'
import Head from 'src/components/Head/Head'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import { Layouts, Main } from './styled'

const Layout: FC = (props) => {
  const { children } = props

  useEffect(() => {
    // @ts-ignore
    if (!window.GA_INITIALIZED) {
      initGA()
      // @ts-ignore
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return (
    <Layouts>
      <Head />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Layouts>
  )
}

export default Layout
