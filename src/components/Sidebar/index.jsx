import React from 'react';
import Link from 'next/link';
import * as Icon from "phosphor-react";
import { useState } from 'react';
import NavData from './data';
import styles from './sidebar.module.scss';
import * as Color from 'styles/colors.module.scss';

export default function Sidebar() {

  const [expanded, setExpanded] = useState(false);

  const iconBadge = (icon, desc) => {
    return (
      <span className={styles.iconBadge}>
        {icon}
        <span className={styles.badgeDesc}>{desc}</span>
      </span>
    )
  }

  
  const handleToggle = () => {
    setExpanded(!expanded);
  }

  return (
    <aside className={`${styles.container} ${expanded ? styles.expanded : ''}`}>
      <button type="button" className={styles.toggle} onClick={handleToggle}>
        <Icon.IconContext.Provider value={{size: 12, weight: "bold", color: Color.DarkGrey, style: { minWidth: 12 }}}>
          {expanded ? <Icon.CaretLeft /> : <Icon.CaretRight />}
        </Icon.IconContext.Provider>
      </button>
      <nav className={styles.nav}>
        <Icon.IconContext.Provider value={{ size: 32, weight: "bold", color: Color.Primary}}>
          <ul>
            {
              NavData.map(item => {
                const NavIcon = item.hasIconBadge ? iconBadge(item.icon, item.badgeDesc) : item.icon;
                return (
                  <li key={item.name}>
                    <Link href={'/' + item.dest} passHref>
                      <a className={styles.link} tabIndex="0">
                        <span className={styles.icon}>
                          {NavIcon}
                        </span>
                        <span className={styles.desc}>{item.name}</span>
                      </a>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </Icon.IconContext.Provider>
      </nav>
      <div className={styles.prefil}></div>
    </aside>
  )
}
