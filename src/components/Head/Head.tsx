import React, { FC } from 'react'
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
  title = 'Yancey Official Blog',
  useTwitterCard = false,
  postTitle,
  postSummary,
  postPosterUrl,
  postUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no, user-scalable=0"
        />
      </Head>

      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {useTwitterCard && (
        <>
          <Head>
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <Head>
            <meta name="twitter:site" content="@YanceyOfficial" />
          </Head>
          <Head>
            <meta name="twitter:creator" content="@YanceyOfficial" />
          </Head>
          <Head>
            <meta name="twitter:title" content={postTitle} />
          </Head>
          <Head>
            <meta name="twitter:description" content={postSummary} />
          </Head>
          <Head>
            <meta name="twitter:image" content={`https:${postPosterUrl}`} />
          </Head>
          <Head>
            <meta name="twitter:image:alt" content={postTitle} />
          </Head>
          <Head>
            <meta name="twitter:url" content={postUrl} />
          </Head>
        </>
      )}
    </>
  )
}

export default MetaHead
