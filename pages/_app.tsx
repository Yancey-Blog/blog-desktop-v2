import React from 'react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloClient } from 'apollo-client'
import withApollo from 'src/shared/withApollo'

import 'normalize.css'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'src/styled/theme'
import GlobalStyle from 'src/styled/globalStyles'
import { useDarkMode, ThemeMode } from 'src/hooks/useDarkMode'

import { SnackbarProvider } from 'notistack'
import { SnackbarUtilsConfigurator } from 'src/components/Toast/Toast'
import {
  SNACKBAR_ANCHOR_ORIGIN,
  SNACKBAR_MAX_NUM,
  SNACKBAR_AUTO_HIDE_DURATION,
} from 'src/shared/constants'

import 'aplayer/dist/APlayer.min.css'

interface IProps {
  apollo: ApolloClient<{}>
}

const Player = dynamic(import('src/containers/Music/components/Player'), {
  ssr: false,
})

const YanceyBlog = ({ Component, pageProps, apollo }: AppProps & IProps) => {
  const { theme, toggleTheme } = useDarkMode()
  const themeMode = theme === ThemeMode.LIGHT ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
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
            <Player />
            <button type="button" onClick={toggleTheme}>
              click me
            </button>
          </>
        </SnackbarProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default withApollo(YanceyBlog, { getDataFromTree })
