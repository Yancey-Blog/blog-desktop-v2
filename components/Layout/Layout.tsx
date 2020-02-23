import React, { FC } from 'react'
import Head from '../Head/Head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Layouts, Main } from './styled'

const Layout: FC = props => {
  const { children } = props

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
