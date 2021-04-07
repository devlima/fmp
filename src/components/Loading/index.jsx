import React from 'react';
import styles from './Loading.module.scss';

const Loading = ({ fixed }) => {
    return (
        <div className={`${styles.loading} ${fixed && styles.fixed}`}>
            <p className={styles.text}>Loading</p>
        </div>
    )
};

export default Loading;