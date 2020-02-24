import React, { FC } from 'react'
import Head from '../Head/Head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Layouts, Main } from './styled'
// import { initGA, logPageView } from '../../shared/analytics'

const Layout: FC = props => {
  const { children } = props

  // useEffect(() => {
  //   // @ts-ignore
  //   if (!window.GA_INITIALIZED) {
  //     initGA()
  //     // @ts-ignore
  //     window.GA_INITIALIZED = true
  //   }
  //   logPageView()
  // }, [])

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
