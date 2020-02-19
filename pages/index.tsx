import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <Link href="/music">to music page</Link>
  </>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default Home
