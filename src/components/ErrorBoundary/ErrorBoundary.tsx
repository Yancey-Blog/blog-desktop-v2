import React from 'react'
import * as Sentry from '@sentry/browser'

class ErrorBoundary extends React.Component {
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        // @ts-ignore
        scope.setExtra(key, errorInfo[key])
      })

      Sentry.captureException(error)
    })
  }

  render() {
    const { children } = this.props
    return children
  }
}

export default ErrorBoundary
