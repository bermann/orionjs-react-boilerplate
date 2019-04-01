import React from 'react'
import {positions, transitions, Provider} from 'react-alert'
import AlertTemplate from './AlertTemplate'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node
}

function AlertsProvider(props) {
  return (
    <Provider
      template={AlertTemplate}
      position={positions.TOP_RIGHT}
      timeout={5000}
      containerStyle={{textTransform: 'none'}}
      transition={transitions.FADE}>
      {props.children}
    </Provider>
  )
}

AlertsProvider.propTypes = propTypes

export default AlertsProvider
