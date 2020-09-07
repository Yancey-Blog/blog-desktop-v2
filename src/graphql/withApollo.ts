import { ApolloClient, InMemoryCache } from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { onError } from '@apollo/client/link/error'
import withApollo from 'next-with-apollo'
import fetch from 'isomorphic-unfetch'
import SnackbarUtils from 'src/components/Toast/Toast'

const httpLink = new BatchHttpLink({
  fetch,
  uri: process.env.NEXT_PUBLIC_API_URL,
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
  ({ initialState }) =>
    new ApolloClient({
      resolvers: {},
      link: errorLink.concat(httpLink),
      cache: new InMemoryCache().restore(initialState || {}),
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
