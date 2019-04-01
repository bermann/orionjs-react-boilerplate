import {createClient} from '@orion-js/graphql-client'
import url from './url'

const key = 'localhost'

export default createClient({
  endpointURL: url,
  useSubscriptions: false,
  saveSession(session) {
    localStorage.setItem(key, JSON.stringify(session, null, 2))
  },
  getSession(session) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      return {}
    }
  }
})
