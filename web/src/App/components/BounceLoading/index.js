import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

const defaultProps = {
  size: 10,
  color: '#c1c1c1'
}

function BounceLoading(props) {
  const itemStyle = {
    height: props.size,
    width: props.size,
    backgroundColor: props.color
  }
  return (
    <div className={styles.bounce_loading}>
      <div className={styles.bounce_bounce1} style={itemStyle} />
      <div className={styles.bounce_bounce2} style={itemStyle} />
      <div className={styles.bounce_bounce3} style={itemStyle} />
    </div>
  )
}

BounceLoading.propTypes = propTypes
BounceLoading.defaultProps = defaultProps

export default BounceLoading
