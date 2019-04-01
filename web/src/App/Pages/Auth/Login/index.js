import React, {useRef} from 'react'
import AutoForm from 'App/components/AutoForm'
import {Field} from 'simple-react-form'
import Button from 'App/components/Button'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {setSession} from '@orion-js/graphql-client'
import Text from 'App/components/fields/Text'
import Translate from 'App/i18n'
import translate from 'App/i18n/translate'
import useUserId from 'App/hooks/useUserId'
import useRouter from 'App/hooks/useRouter'

const propTypes = {
  onLogin: PropTypes.func
}

function Login(props) {
  const form = useRef(null)
  const userId = useUserId()
  const {history} = useRouter()

  if (userId) {
    history.push('/')
    return null
  }

  return (
    <div>
      <AutoForm
        mutation="loginWithPassword"
        ref={form}
        onSuccess={async session => {
          await setSession(session)
          await props.onLogin()
        }}>
        <div className="label">Email</div>
        <Field fieldName="email" type={Text} fieldType="email" placeholder="Email" />
        <div className="label">
          <Translate tr="auth.password" />
        </div>
        <Field
          fieldName="password"
          type={Text}
          fieldType="password"
          placeholder={translate('auth.password')}
        />
        <div className="description">
          <Link to="/forgot">
            <Translate tr="auth.forgotMyPassword" />
          </Link>
        </div>
      </AutoForm>
      <br />
      <Button style={{marginRight: 10}} to="/register">
        <Translate tr="auth.createAnAccount" />
      </Button>
      <Button onClick={() => form.current.submit()} primary>
        <Translate tr="auth.login" />
      </Button>
    </div>
  )
}

Login.propTypes = propTypes

export default Login
