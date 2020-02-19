import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'

const httpLink = new BatchHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  resolvers: {},
  link: errorLink.concat(authLink).concat(httpLink),
})

export default client
