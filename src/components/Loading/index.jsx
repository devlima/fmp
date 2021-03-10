import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <p>Carregando...</p>
        </div>
    )
};

export default Loading;