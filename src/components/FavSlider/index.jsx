import React from 'react';
import styles from './favslider.module.scss';
import Slider from "react-slick";
import Link from 'next/link';
import * as Icon from "phosphor-react";
import * as Color from 'styles/colors.module.scss';

const FavSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1119,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1449,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1799,
        settings: {
          slidesToShow: 5,
        }
      },
    ]
  };
  
  return (
    <Icon.IconContext.Provider value={{size: 28, weight: "bold", color: Color.DarkGrey, style: { minWidth: 12 }}}>
      <Slider {...settings} className={styles.favSlider}>
        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            wage cap
            <span className={styles.sufix}>
              <Icon.CurrencyDollarSimple />
            </span>
          </a>
        </Link>
      </Slider>
    </Icon.IconContext.Provider>
  )
}

export default FavSlider;