import React from 'react';
import styles from './wagecap.module.scss';
import WageCapData from 'fakedata/wagecap'; 

const WageCap = ({ }) => {
  return (
    <ul className={`list-unstyled ${styles.container}`}>
      {WageCapData.map((item, index) => {
        const value = new Intl.NumberFormat( this, {style: 'currency', currency: 'GBP'}).format(item.value);
        return (
          <li className={styles.item} key={item.title + index}>
            <p>{item.title}</p>
            <p>{value}</p>
          </li>
        )
      })}
    </ul>
  )
};

export default WageCap;