import Head from 'next/head';
import Slider from "react-slick";
import styles from 'styles/app.module.scss';
import Sidebar from 'components/Sidebar';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import Logo from 'components/Logo';

export default function App() {
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      <main className={styles.main}>
        <Sidebar />
        <div className={styles.container}>
          <header className={styles.header}>
            <div>
              <Title color="primary" size="h1" subtitle>man utd fc</Title>
              <Subtitle color="white" size="h1">SEASON 2020/2021</Subtitle>
            </div>
            <Logo />
          </header>
        </div>
      </main>
    </>
  )
}
