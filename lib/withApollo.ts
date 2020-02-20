import { ApolloClient } from 'apollo-client'
import withApollo from 'next-with-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { onError } from 'apollo-link-error'
import fetch from 'isomorphic-unfetch'

const httpLink = new BatchHttpLink({
  fetch,
  uri: process.env.BASE_URL,
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(err => {
      console.log(err)
    })
  }

  if (networkError) {
    console.log(networkError.message)
  }
})

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      resolvers: {},
      link: errorLink.concat(httpLink),
      cache: new InMemoryCache().restore(initialState || {}),
    }),
)
