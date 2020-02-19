import { NextPage } from 'next'
import Link from 'next/link'

interface Props {
  userAgent: string
}

const Home: NextPage<Props> = ({ userAgent }) => (
  <>
    <h1>
      Hello world! - user agent:
      {userAgent}
    </h1>
    <Link href="/music">
      <a>to music page</a>
    </Link>
  </>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default Home
