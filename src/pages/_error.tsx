import React, { FC } from 'react'
import Layout from 'src/containers/Layout/Layout'
import ErrorContainer from 'src/containers/Error/Error'

const ServerError: FC = () => {
  return (
    <Layout>
      <ErrorContainer statusCode={500} imageUrl="5xx.png" />
    </Layout>
  )
}

export default ServerError
