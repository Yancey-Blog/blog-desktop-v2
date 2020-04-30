import React, { FC } from 'react'
import Layout from 'src/containers/Layout/Layout'
import ErrorPage from 'src/components/ErrorPage/ErrorPage'

const NotFound: FC = () => {
  return (
    <Layout>
      <ErrorPage statusCode={404} imageUrl="404.png" />
    </Layout>
  )
}

export default NotFound
