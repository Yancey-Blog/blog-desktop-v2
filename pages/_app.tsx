import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { getDataFromTree } from '@apollo/react-ssr'
import withApollo from '../lib/withApollo'
import 'normalize.css'

interface IProps {
  apollo: ApolloClient<{}>
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp, { getDataFromTree })
