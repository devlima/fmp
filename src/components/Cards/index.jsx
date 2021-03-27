import React from 'react';
import styles from './cards.module.scss';

const Cards = ({ children }) => {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
};

export default Cards;