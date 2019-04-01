import React from 'react'
import RouterProvider from './RouterProvider'
import SessionProvider from './SessionProvider'
import AlertsProvider from './AlertsProvider'
import PropTypes from 'prop-types'
import ApolloProvider from './ApolloProvider'

const propTypes = {
  children: PropTypes.node
}

function Providers(props) {
  return (
    <ApolloProvider>
      <SessionProvider>
        <AlertsProvider>
          <RouterProvider>{props.children}</RouterProvider>
        </AlertsProvider>
      </SessionProvider>
    </ApolloProvider>
  )
}

Providers.propTypes = propTypes

export default Providers
