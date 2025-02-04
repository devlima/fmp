import React from 'react';
import Title from 'components/Title';
import styles from './card.module.scss';

const Card = ({ title, full, children }) => {
  return (
    <article className={`${styles.container} ${full ? styles.full : ''}`}>
      <Title size="h3" color="white" center noMargin>{title}</Title>
      <div className={styles.content}>
        {children}
      </div>
    </article>
  )
};

export default Card;