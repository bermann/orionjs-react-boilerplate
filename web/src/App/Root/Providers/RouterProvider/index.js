import React from 'react'
import RouterContext from 'App/contexts/RouterContext'
import PropTypes from 'prop-types'
import {Route} from 'react-router'

const propTypes = {
  children: PropTypes.any
}

function RouterProvider({children}) {
  return (
    <Route>
      {router => <RouterContext.Provider value={router}>{children}</RouterContext.Provider>}
    </Route>
  )
}

RouterProvider.propTypes = propTypes

export default RouterProvider
