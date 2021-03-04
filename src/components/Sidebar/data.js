import React from 'react';
import * as Icon from "phosphor-react";

const NavData = [
  {
    "name": 'Home',
    "icon": <Icon.House />,
    "dest": '',
    "hasIconBadge": false,
  },
  {
    "name": 'Squad Senior',
    "icon": <Icon.Users />,
    "dest": 'squad/senior',
  },
  {
    "name": 'Staff',
    "icon": <Icon.Users size={24} />,
    "dest": 'staff',
    "hasIconBadge": true,
    "badgeDesc": 'staff'
  },
  {
    "name": 'Squad B',
    "icon": <Icon.Users size={24} />,
    "dest": 'squad/b',
    "hasIconBadge": true,
    "badgeDesc": 'B'
  },
  {
    "name": 'Squad u21',
    "icon": <Icon.Users size={24} />,
    "dest": 'squad/u21',
    "hasIconBadge": true,
    "badgeDesc": 'u21'
  },
  {
    "name": 'Squad u18',
    "icon": <Icon.Users size={24} />,
    "dest": 'squad/u18',
    "hasIconBadge": true,
    "badgeDesc": 'u18'
  },
  {
    "name": 'Finance',
    "icon": <Icon.CurrencyDollarSimple />,
    "dest": 'finance'
  },
  {
    "name": 'Spends',
    "icon": <Icon.ChartLine />,
    "dest": 'spends'
  },
  {
    "name": 'Configuration',
    "icon": <Icon.Gear />,
    "dest": 'config'
  }
]

export default NavData;