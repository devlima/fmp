import React from 'react';
import styles from './logo.module.scss';
import Link from 'next/link';

const Logo = ({ size = 'md', color = 'primary' }) => {
  return (
    <Link href="/home" passHref>
      <a title="Football Manager Planner" className={`${styles.logo} ${styles[size]} ${styles[color]}`}>
        fm
        <small>planner</small>
      </a>
    </Link>
  )
};

export default Logo;