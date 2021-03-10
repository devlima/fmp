import React from 'react';
import styles from './logo.module.scss';
import Link from 'next/link';

const Logo = ({ size, color = 'primary' }) => {
  return (
    <Link href="/" passHref>
      <a className={`${styles.logo} ${styles[size]} ${styles[color]}`}>
        fm
        <small>planner</small>
      </a>
    </Link>
  )
};

export default Logo;