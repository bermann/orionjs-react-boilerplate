import {useContext} from 'react'

export default function() {
  const getLocale = useContext()
  return getLocale()
}
