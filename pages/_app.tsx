import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloClient } from 'apollo-client'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import GlobalStyle from '../lib/globalStyles'
import withApollo from '../lib/withApollo'
import theme from '../lib/theme'

interface IProps {
  apollo: ApolloClient<{}>
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}

export default withApollo(MyApp, { getDataFromTree })
