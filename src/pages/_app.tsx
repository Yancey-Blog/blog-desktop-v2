import React from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import * as Sentry from '@sentry/browser'
import NProgress from 'nprogress'
import { SnackbarProvider } from 'notistack'
import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloClient } from 'apollo-client'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'src/styled/theme'
import GlobalStyle from 'src/styled/globalStyles'
import { useDarkMode, ThemeMode } from 'src/hooks/useDarkMode'
import ToggleTheme from 'src/components/ToggleTheme/ToggleTheme'
import { SnackbarUtilsConfigurator } from 'src/components/Toast/Toast'
import {
  SNACKBAR_ANCHOR_ORIGIN,
  SNACKBAR_MAX_NUM,
  SNACKBAR_AUTO_HIDE_DURATION,
  SENTRY,
} from 'src/shared/constants'
import withApollo from 'src/shared/withApollo'
import { devToolsWarning } from 'src/shared/utils'
import { NextWebVitalsMetrics } from 'src/shared/types'
import 'normalize.css'
import 'aplayer/dist/APlayer.min.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'tocbot/dist/tocbot.css'
import 'src/static/css/nprogress.css'

interface Props {
  apollo: ApolloClient<{}>
}

// TODO: Remove the `Player component` temporarily for performance
// testing, the performance index(from lighthouse) has
// increased from 76 to 90. Next optimize the component.
const Player = dynamic(import('src/containers/Music/components/Player'), {
  ssr: false,
})

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

Sentry.init({ dsn: SENTRY })

devToolsWarning()

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetrics) {
  if (window.ga) {
    window.ga('send', 'event', {
      eventCategory: `Next.js ${label} metric`,
      eventAction: name,
      eventValue: Math.round(name === 'CLS' ? value * 1000 : value),
      eventLabel: id,
      nonInteraction: true,
    })
  }
}

const YanceyBlog = ({ Component, pageProps, apollo }: AppProps & Props) => {
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
            <ToggleTheme theme={theme} onToggle={toggleTheme} />
          </>
        </SnackbarProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default withApollo(YanceyBlog, { getDataFromTree })
