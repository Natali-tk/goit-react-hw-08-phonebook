import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
}
