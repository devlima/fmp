import React from 'react';
import styles from './error.module.scss';

export default function Custom404() {

  const goBack = () => {
    window.history.back();
  }

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>page not found</p>
      <button type="button" onClick={goBack} className={styles.back}>Go back</button>
    </div>
  )
}