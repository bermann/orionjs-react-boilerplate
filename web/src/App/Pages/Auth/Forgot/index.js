import React, {useRef} from 'react'
import {useAlert} from 'react-alert'
import AutoForm from 'App/components/AutoForm'
import Button from 'App/components/Button'
import Translate from 'App/i18n'
import useUserId from 'App/hooks/useUserId'
import useRouter from 'App/hooks/useRouter'

const propTypes = {}

function ForgotPassword(props) {
  const form = useRef(null)
  const {show: showMessage} = useAlert()
  const userId = useUserId()
  const {history} = useRouter()

  if (userId) {
    history.push('/')
    return null
  }

  return (
    <div>
      <AutoForm
        mutation="forgotPassword"
        ref={form}
        onSuccess={() => {
          showMessage(<Translate tr="auth.followInstructionsInEmail" />, {type: 'success'})
        }}
      />
      <br />
      <Button onClick={() => form.current.submit()} primary>
        <Translate tr="auth.resetPassword" />
      </Button>
      <br />
    </div>
  )
}

ForgotPassword.propTypes = propTypes

export default ForgotPassword
