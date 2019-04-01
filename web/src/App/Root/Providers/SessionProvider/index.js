import React from 'react'
import SessionContext from 'App/contexts/SessionContext'
import useSession from './useSession'

export default function(props) {
  const session = useSession()

  return <SessionContext.Provider value={session}>{props.children}</SessionContext.Provider>
}
