import React, {useRef} from 'react'
import AutoForm from 'App/components/AutoForm'
import {Field} from 'simple-react-form'
import Text from 'App/components/fields/Text'
import Button from 'App/components/Button'
import ObjectField from 'App/components/fields/ObjectField'
import {Link} from 'react-router-dom'
import {setSession} from '@orion-js/graphql-client'
import Translate from 'App/i18n'
import translate from 'App/i18n/translate'
import useUserId from 'App/hooks/useUserId'
import useRouter from 'App/hooks/useRouter'
import PropTypes from 'prop-types'

const propTypes = {
  onLogin: PropTypes.func
}

function Register(props) {
  const form = useRef()
  const userId = useUserId()
  const {history} = useRouter()

  if (userId) {
    history.push('/')
    return null
  }

  return (
    <div>
      <AutoForm
        mutation="createUser"
        ref={form}
        onSuccess={async session => {
          await setSession(session)
          await props.onLogin()
        }}>
        <Field fieldName="profile" type={ObjectField} style={null}>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="label">
                <Translate tr="auth.name" />
              </div>
              <Field fieldName="firstName" type={Text} placeholder={translate('auth.name')} />
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="label">
                <Translate tr="auth.lastName" />
              </div>
              <Field fieldName="lastName" type={Text} placeholder={translate('auth.lastName')} />
            </div>
          </div>
        </Field>
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
          description={translate('auth.passwordRequirements')}
        />
      </AutoForm>
      <br />
      <Button onClick={() => form.current.submit()} primary>
        <Translate tr="auth.createAccount" />
      </Button>
      <br />
      <br />
      <div>
        <Translate tr="auth.ifYouHaveAnAccount" />{' '}
        <Link to="/login">
          <Translate tr="auth.login" />
        </Link>
      </div>
    </div>
  )
}

Register.propTypes = propTypes

export default Register
