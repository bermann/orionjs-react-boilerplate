import React, {useState, useEffect} from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import getClassNames from './getClassNames'
import BounceLoading from 'App/components/BounceLoading'
import useRouter from 'App/hooks/useRouter'

const propTypes = {
  label: PropTypes.any,
  children: PropTypes.any,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  big: PropTypes.bool,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string
}

const defaultProps = {
  primary: false,
  dange: false,
  big: false,
  style: {},
  disabled: false
}

let mounted

function Button(props) {
  const [loading, setLoading] = useState(false)
  const {history} = useRouter()

  useEffect(() => {
    mounted = true
    return () => (mounted = false)
  }, [])

  const onClick = async () => {
    if (props.disabled || props.loading || loading) return
    if (props.to) {
      history.push(props.to)
      return
    }
    setLoading(true)
    await props.onClick()
    if (mounted) setLoading(false)
  }

  const isLoading = loading || props.loading

  return (
    <span className={styles.buttonContainer} onClick={onClick}>
      <span className={getClassNames({...props, loading: isLoading})} style={props.style}>
        {isLoading ? <BounceLoading /> : props.label || props.children}
      </span>
    </span>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
