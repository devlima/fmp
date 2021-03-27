import React from 'react';
import styles from './title.module.scss';

const Title = ({ size, color, noMargin, center, children }) => {
  const Tag = size || 'h1';
  return <Tag className={`${styles.title} c-${color}`} style={{marginBottom: noMargin ? 0 : null, textAlign: center ? 'center' : null}}>{children}</Tag>
};

export default Title;