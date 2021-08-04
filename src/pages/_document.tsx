import Document, { DocumentContext, Html } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import * as Sentry from '@sentry/browser'

process.on('unhandledRejection', (err) => {
  Sentry.captureException(err)
})

process.on('uncaughtException', (err) => {
  Sentry.captureException(err)
})

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <Html lang="en">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Html>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
