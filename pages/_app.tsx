import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloClient } from 'apollo-client'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import GlobalStyle from '../src/lib/globalStyles'
import withApollo from '../src/lib/withApollo'
import { darkTheme } from '../src/lib/theme'

interface IProps {
  apollo: ApolloClient<{}>
}

class MyApp extends App<IProps> {
  public render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}

export default withApollo(MyApp, { getDataFromTree })
