import {useContext} from 'react'
import SessionContext from 'App/contexts/SessionContext'

export default function useSession() {
  return useContext(SessionContext)
}
