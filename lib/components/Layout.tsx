import { FC } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import client from '../config/apolloClient'
import Header from './Header'
import Footer from './Footer'

const Layout: FC = props => {
  const { children } = props

  return (
    <ApolloProvider client={client}>
      <section
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </section>
    </ApolloProvider>
  )
}

export default Layout
