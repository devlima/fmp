import React from 'react';
import styles from './subtitles.module.scss';

const Subtitle = ({ size, color, children }) => {
  return <p className={`${styles.subtitle} c-${color} ${styles[size]}`}>{children}</p>
};

export default Subtitle;