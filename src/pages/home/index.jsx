import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Sidebar from 'components/Sidebar';
import Cards from 'components/Cards';
import Card from 'components/Card';
import GraphicData from 'fakedata/graphic';
import Loading from 'components/Loading';

export default function App() {
  const Header = dynamic(() => import('components/Header'), { loading: () => <Loading fixed /> });
  const FavSlider = dynamic(() => import('components/FavSlider'), { loading: () => <Loading fixed /> });
  const WageCap = dynamic(() => import('components/WageCap'), { loading: () => <Loading fixed /> });
  const Graphic = dynamic(() => import('components/Graphic'), { loading: () => <Loading fixed /> });

  return (
    <>
      <Head>
        <title>FMPlanner</title>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      <main className="main">
        <Sidebar />
        <div className="container">
            <Header />
            <FavSlider />
            <Cards>
              <Card title="wage cap/m">
                <WageCap />
              </Card>
              <Card title="Season spends overall" link="/" full>
                <Graphic data={GraphicData} team="mufc" />
              </Card>
            </Cards>
        </div>
      </main>
    </>
  )
}
