import React from 'react';
import styles from './logo.module.scss';

const Logo = ({ size, color = 'primary' }) => {
  return (
    <p className={`${styles.logo} ${styles[size]} ${styles[color]}`}>
      fm
      <small>planner</small>
    </p>
  )
};

export default Logo;