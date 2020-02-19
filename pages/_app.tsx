import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../lib/config/apolloClient'

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
)

export default withData(App)
