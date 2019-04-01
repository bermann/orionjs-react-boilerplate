import translate from 'App/i18n/translate'

export default {
  password: {
    label: translate('auth.newPassword'),
    type: String,
    min: 8,
    description: translate('auth.passwordRequirements'),
    fieldOptions: {
      placeholder: translate('auth.newPassword'),
      fieldType: 'password'
    }
  },
  confirm: {
    label: translate('auth.confirmPassword'),
    type: String,
    fieldOptions: {
      placeholder: translate('auth.confirmPassword'),
      fieldType: 'password'
    },
    custom(
      confirm,
      {
        doc: {password}
      }
    ) {
      if (confirm !== password) {
        return 'passwordsDontMatch'
      }
    }
  },
  token: {
    type: String
  }
}
