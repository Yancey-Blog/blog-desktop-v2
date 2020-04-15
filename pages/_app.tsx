import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloClient } from 'apollo-client'
import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import { SnackbarUtilsConfigurator } from 'src/components/Toast/Toast'
import GlobalStyle from 'src/shared/globalStyles'
import withApollo from 'src/shared/withApollo'
import { lightTheme } from 'src/shared/theme'
import {
  SNACKBAR_ANCHOR_ORIGIN,
  SNACKBAR_MAX_NUM,
  SNACKBAR_AUTO_HIDE_DURATION,
} from 'src/shared/constants'

interface IProps {
  apollo: ApolloClient<{}>
}

class YanceyBlog extends App<IProps> {
  public render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <ApolloProvider client={apollo}>
          <SnackbarProvider
            maxSnack={SNACKBAR_MAX_NUM}
            anchorOrigin={SNACKBAR_ANCHOR_ORIGIN}
            autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
          >
            <>
              <SnackbarUtilsConfigurator />
              <Component {...pageProps} />
            </>
          </SnackbarProvider>
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}

export default withApollo(YanceyBlog, { getDataFromTree })
