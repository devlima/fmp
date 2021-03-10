import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from 'styles/app.module.scss';

export default function App() {


  const Sidebar = dynamic(() => import('components/Sidebar'));
  const Header = dynamic(() => import('components/Header'));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 1
  };

  return (
    <>
      <Head>
        <title>FMPlanner</title>
      </Head>

      <main className={styles.main}>
        <Sidebar />
        <div className={styles.container}>
            <Header />
        </div>
      </main>
    </>
  )
}
