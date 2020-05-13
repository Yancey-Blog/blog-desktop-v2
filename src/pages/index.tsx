import React from 'react'
import { GetServerSidePropsContext } from 'next'
import Layout from 'src/containers/Layout/Layout'
import HomeContainer from 'src/containers/Home/Home'

const Index = ({ isSupportWebp }: { isSupportWebp: boolean }) => {
  return (
    <Layout>
      <HomeContainer isSupportWebp={isSupportWebp} />
    </Layout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      isSupportWebp: ctx.req.headers.accept?.includes('image/webp'),
    },
  }
}

export default Index
