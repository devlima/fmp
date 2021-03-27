import React from 'react';
import dynamic from 'next/dynamic';
import styles from './header.module.scss';

const Header = () => {
  const Title = dynamic(() => import('components/Title'));
  const Subtitle = dynamic(() => import('components/Subtitle'));
  const Logo = dynamic(() => import('components/Logo'));
  
  return (
    <header className={styles.header}>
      <div>
        <Title color="primary" size="h1" noMargin>man utd fc</Title>
        <Subtitle color="white" size="h1">SEASON 2020/2021</Subtitle>
      </div>
      <Logo />
    </header>
  )
}

export default Header;