import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { onError } from 'apollo-link-error'
import withApollo from 'next-with-apollo'
import fetch from 'isomorphic-unfetch'
import SnackbarUtils from 'src/components/Toast/Toast'

const httpLink = new BatchHttpLink({
  fetch,
  uri: process.env.BASE_URL,
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((graphQLError) => {
      SnackbarUtils.error(`[GraphQL error]: ${graphQLError.message}`)
    })
  }

  if (networkError) {
    SnackbarUtils.error(`[Network error]: ${networkError.message}`)
  }
})

export default withApollo(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      resolvers: {},
      link: errorLink.concat(httpLink),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
        mutate: {
          errorPolicy: 'all',
        },
      },
    }),
)
