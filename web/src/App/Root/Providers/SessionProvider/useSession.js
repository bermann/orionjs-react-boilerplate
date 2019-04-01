import {useEffect} from 'react'
import {getSession} from '@orion-js/graphql-client'
import useForceUpdate from 'App/hooks/useForceUpdate'
import apolloClient from '../../apolloClient'

export default function() {
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    const onResetStore = () => forceUpdate()
    apolloClient.onResetStore(onResetStore)
    return () => {
      const index = apolloClient.resetStoreCallbacks.indexOf(onResetStore)
      if (index > -1) {
        apolloClient.resetStoreCallbacks.splice(index, 1)
      }
    }
  }, [])

  return getSession() || {}
}
