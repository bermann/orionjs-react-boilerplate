import React, {useState, useEffect} from 'react'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import styles from './styles.css'
import {setSession} from '@orion-js/graphql-client'
import Translate from 'App/i18n'
import useMutation from 'apollo-hooks/lib/useMutation'
import Loading from 'App/components/Loading'

const propTypes = {
  token: PropTypes.object,
  onLogin: PropTypes.func
}

export default function VerifyEmail(props) {
  const [error, setError] = useState()

  const verifyEmail = useMutation(gql`
    mutation verifyEmail($token: String) {
      session: verifyEmail(token: $token) {
        _id
        userId
        roles
        publicKey
        secretKey
      }
    }
  `)

  useEffect(async () => {
    try {
      const {session} = await verifyEmail({
        token: props.token
      })
      await setSession(session)
      props.onLogin()
    } catch (error) {
      if (error.message.includes('Validation Error')) {
        setError(<Translate tr="auth.emailVerficationCodeExpired" />)
      } else {
        setError(error.message)
      }
    }
  })

  if (error) {
    return <div className={styles.error}>{error}</div>
  }
  return (
    <div className={styles.loading}>
      <Loading size={40} />
      <p>
        <Translate tr="auth.weAreVerifyingYourEmail" />
      </p>
    </div>
  )
}

VerifyEmail.propTypes = propTypes
