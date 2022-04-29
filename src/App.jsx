import React from 'react'
import { useShadowElem } from './hooks/useShadowElem'
import styles from './styles.module.scss'

export const App = () => {
  const [Component] = useShadowElem('div')

  return (
    <div className={styles.container}>
      {Component}
    </div>
  )
}
