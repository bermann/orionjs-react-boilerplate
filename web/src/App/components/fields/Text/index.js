import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'

const propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  fieldType: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.node,
  errorMessage: PropTypes.node,
  disabled: PropTypes.bool,
  passProps: PropTypes.object
}

const defaultProps = {
  fieldType: 'text',
  value: ''
}

function Text(props) {
  return (
    <div>
      <div className="label">{props.label}</div>
      <div className={styles.input_container}>
        <input
          className={styles.input_text}
          type={props.fieldType}
          value={props.value}
          placeholder={props.placeholder}
          onChange={event => props.onChange(event.target.value)}
          disabled={props.disabled}
          {...props.passProps}
        />
      </div>
      <div className="description">{props.description}</div>
      <div className={styles.input_error}>{props.errorMessage}</div>
    </div>
  )
}

Text.propTypes = propTypes
Text.defaultProps = defaultProps

export default Text
