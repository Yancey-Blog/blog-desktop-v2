import { FC } from 'react'
import Head from 'next/head'

interface Props {
  title?: string
  useTwitterCard?: boolean
  postTitle?: string
  postSummary?: string
  postPosterUrl?: string
  postUrl?: string
}

const MetaHead: FC<Props> = ({
  title = 'Yancey Official Blog | Yancey Inc.',
  useTwitterCard = false,
  postTitle,
  postSummary,
  postPosterUrl,
  postUrl,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0,shrink-to-fit=no,user-scalable=0"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="keywords" content="Yancey,Blog,Technology,Music" />
      <meta
        name="description"
        content="Technology, Music and Poems. | Yancey Official Blog | Yancey Inc."
      />

      <link rel="manifest" href="/manifest.json" />
      <link
        href="/icons/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png" />

      {useTwitterCard && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@YanceyOfficial" />
          <meta name="twitter:creator" content="@YanceyOfficial" />
          <meta name="twitter:title" content={postTitle} />
          <meta name="twitter:description" content={postSummary} />
          <meta name="twitter:image" content={postPosterUrl} />
          <meta name="twitter:image:alt" content={postTitle} />
          <meta name="twitter:url" content={postUrl} />
        </>
      )}
    </Head>
  )
}

export default MetaHead
