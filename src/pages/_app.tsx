import React from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import * as Sentry from '@sentry/browser'
import NProgress from 'nprogress'
import { getCLS, getFID, getLCP, getFCP, getTTFB, Metric } from 'web-vitals'

import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloClient } from 'apollo-client'
import withApollo from 'src/shared/withApollo'

import 'normalize.css'
import 'aplayer/dist/APlayer.min.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'tocbot/dist/tocbot.css'
import 'src/static/css/nprogress.css'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'src/styled/theme'
import GlobalStyle from 'src/styled/globalStyles'
import { useDarkMode, ThemeMode } from 'src/hooks/useDarkMode'
import ToggleTheme from 'src/components/ToggleTheme/ToggleTheme'

import { SnackbarProvider } from 'notistack'
import { SnackbarUtilsConfigurator } from 'src/components/Toast/Toast'
import {
  SNACKBAR_ANCHOR_ORIGIN,
  SNACKBAR_MAX_NUM,
  SNACKBAR_AUTO_HIDE_DURATION,
  SENTRY,
} from 'src/shared/constants'
import { devToolsWarning } from 'src/shared/utils'

interface IProps {
  apollo: ApolloClient<{}>
}

// TODO:
// Remove the `Player component` temporarily for
// performance testing, the performance
// index(from lighthouse) has increased from
// 76 to 90. Next optimize the component.
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
  delta,
  value,
  isFinal,
  entries,
}: Metric) {
  console.log(id, name, delta, value, isFinal, entries)
  window.ga('send', 'event', {
    // eventCategory: `Next.js ${label} metric`,
    eventCategory: 'Web Vitals',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value),
    eventLabel: id,
    nonInteraction: true,
  })

  // console.log('label: ' + label)
  // console.log('label: ' + label)
  // console.log('label: ' + label)
  // console.log('label: ' + label)
  // console.log('label: ' + label)
}

getCLS(reportWebVitals)
getFID(reportWebVitals)
getLCP(reportWebVitals)
getFCP(reportWebVitals)
getTTFB(reportWebVitals)

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
            <ToggleTheme theme={theme} onToggle={toggleTheme} />
          </>
        </SnackbarProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default withApollo(YanceyBlog, { getDataFromTree })
