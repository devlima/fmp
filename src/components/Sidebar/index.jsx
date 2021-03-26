import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Icon from "phosphor-react";
import { useState } from 'react';
import NavData from './data';
import styles from './sidebar.module.scss';
import * as Color from 'styles/colors.module.scss';

export default function Sidebar() {

  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const iconBadge = (icon, desc) => {
    return (
      <span className={styles.iconBadge}>
        {icon}
        <span aria-hidden="true" className={styles.badgeDesc}>{desc}</span>
      </span>
    )
  };
  
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <aside className={`${styles.container} ${expanded ? styles.expanded : ''}`}>
      <button type="button" className={styles.toggle} onClick={handleToggle} aria-label="Toggle sidebar state">
        <Icon.IconContext.Provider value={{size: 12, weight: "bold", color: Color.darkgrey, style: { minWidth: 12 }}}>
          {expanded ? <Icon.CaretLeft /> : <Icon.CaretRight />}
        </Icon.IconContext.Provider>
      </button>
      <nav className={styles.nav}>
        <Icon.IconContext.Provider value={{ size: 32, weight: "bold", color: Color.primary}}>
          <ul>
            {
              NavData.map((item, index) => {
                const NavIcon = item.hasIconBadge ? iconBadge(item.icon, item.badgeDesc) : item.icon;
                const path = '/' + item.dest;
                const isActive = router.pathname === path;
                return (
                  <li key={item.name + index}>
                    <Link href={path} passHref>
                      <a className={`${styles.link} ${isActive ? styles.linkActive : ''}`} tabIndex="0" aria-label={`link to ${item.dest}`}>
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
      <Link href="/profile">
        <a className={styles.prefil} aria-label="link to profile" tabIndex="0"></a>
      </Link>
    </aside>
  )
}
