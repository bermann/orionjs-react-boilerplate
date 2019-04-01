import React, {useRef} from 'react'
import AutoForm from 'App/components/AutoForm'
import Button from 'App/components/Button'
import PropTypes from 'prop-types'
import {setSession} from '@orion-js/graphql-client'
import Translate from 'App/i18n'
import useUserId from 'App/hooks/useUserId'
import useRouter from 'App/hooks/useRouter'
import {useAlert} from 'react-alert'

const propTypes = {
  showMessage: PropTypes.func,
  onLogin: PropTypes.func,
  userId: PropTypes.string,
  token: PropTypes.string
}

function ResetPassword(props) {
  const form = useRef(null)
  const userId = useUserId()
  const {history} = useRouter()
  const showMessage = useAlert()

  if (userId) {
    history.push('/')
  }

  return (
    <div>
      <AutoForm
        doc={{token: props.token}}
        mutation="resetPassword"
        ref={form}
        schema={this.schema}
        onSuccess={async session => {
          await setSession(session)
          showMessage(<Translate tr="auth.yourPasswordHasBeenChanged" />)
          props.onLogin()
        }}
        onValidationError={token => {
          if (token === 'tokenNotFound') {
            showMessage(<Translate tr="auth.resetLinkExpired" />)
          }
        }}
      />
      <br />
      <Button onClick={() => form.submit()} primary>
        <Translate tr="auth.resetPassword" />
      </Button>
      <br />
      <br />
    </div>
  )
}

ResetPassword.propTypes = propTypes

export default ResetPassword
