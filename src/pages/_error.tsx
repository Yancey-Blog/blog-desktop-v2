import React, { FC } from 'react'
import Layout from 'src/containers/Layout/Layout'
import ErrorPage from 'src/components/ErrorPage/ErrorPage'

const ServerError: FC = () => {
  return (
    <Layout>
      <ErrorPage statusCode={500} imageUrl="5xx.png" />
    </Layout>
  )
}

export default ServerError
