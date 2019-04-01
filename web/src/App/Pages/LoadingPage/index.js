import React from 'react'
import styles from './styles.css'
import Loading from 'App/components/Loading'

export default function LoadingPage(props) {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  )
}
