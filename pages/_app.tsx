import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloClient } from 'apollo-client'
import 'normalize.css'
import ThemeProvider from 'src/components/ThemeProvider/ThemeProvider'
import SnackbarProvider from 'src/components/SnackbarProvider/SnackbarProvider'
import withApollo from 'src/shared/withApollo'

interface IProps {
  apollo: ApolloClient<{}>
}

class YanceyBlog extends App<IProps> {
  public render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ThemeProvider>
        <ApolloProvider client={apollo}>
          <SnackbarProvider>
            <Component {...pageProps} />
          </SnackbarProvider>
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}

export default withApollo(YanceyBlog, { getDataFromTree })
