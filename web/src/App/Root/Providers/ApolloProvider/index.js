import React from 'react'
import PropTypes from 'prop-types'
import {ApolloProvider} from 'react-apollo'
import HooksApolloProvider from 'apollo-hooks/lib/ApolloProvider'
import apolloClient from '../../apolloClient'

const propTypes = {
  children: PropTypes.node
}

function MyApolloProvider(props) {
  return (
    <ApolloProvider client={apolloClient}>
      <HooksApolloProvider client={apolloClient}>{props.children}</HooksApolloProvider>
    </ApolloProvider>
  )
}

MyApolloProvider.propTypes = propTypes

export default MyApolloProvider
