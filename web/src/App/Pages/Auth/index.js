import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import Login from './Login'
import Register from './Register'
import VerifyEmail from './VerifyEmail'
import Forgot from './Forgot'
import Reset from './Reset'
import {Route, Switch, Link} from 'react-router-dom'
import useRouter from 'App/hooks/useRouter'

const propTypes = {
  children: PropTypes.any,
  params: PropTypes.object
}

export default function Auth(props) {
  const {location, history} = useRouter()

  const onLogin = () => {
    if (location.state && location.state.nextPathname) {
      history.replace(location.state.nextPathname)
    } else {
      history.replace('/')
    }
  }

  const otherProps = {onLogin: onLogin}

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img className={styles.logo} src="/imgs/logo.svg" alt="Logo" />
            </Link>
          </div>
          <Switch>
            <Route path="/login" render={() => <Login {...otherProps} />} />
            <Route path="/register" render={() => <Register {...otherProps} />} />
            <Route
              path="/verify-email/:token"
              render={({match}) => <VerifyEmail token={match.params.token} {...otherProps} />}
            />
            <Route path="/forgot" render={() => <Forgot {...otherProps} />} />
            <Route
              path="/reset/:token"
              render={({match}) => <Reset token={match.params.token} {...otherProps} />}
            />
          </Switch>
        </div>
      </div>
      <div className={styles.photo} />
    </div>
  )
}

Auth.propTypes = propTypes
