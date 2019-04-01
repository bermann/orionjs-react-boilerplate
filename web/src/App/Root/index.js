import React from 'react'
import PropTypes from 'prop-types'
import Providers from './Providers'
import './locale'

const propTypes = {
  children: PropTypes.node
}

function Root(props) {
  return <Providers>{props.children}</Providers>
}

Root.propTypes = propTypes

export default Root
