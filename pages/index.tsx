import { ApolloProvider } from '@apollo/react-hooks'
import client from '../lib/config/apolloClient'
import Layout from '../lib/components/Layout'

export default () => (
  // <ApolloProvider client={client}>
  <Layout />
  // </ApolloProvider>
)
