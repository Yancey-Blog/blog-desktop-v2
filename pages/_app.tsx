import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import withApolloClient from '../lib/apolloClient'

interface Props {
  apollo: ApolloClient<{}>
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
