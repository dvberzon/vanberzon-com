import React from 'react';
import { Link } from "gatsby"

const navLinks = [
  { route: '/', name: 'Blog', home: true },
  { route: '/about', name: 'About' },
  { route: '/talks', name: 'Talks' },
  { route: '/readability', name: 'Readability' },
]

const NavLink = ({ link, path}) => {
  const active = link.home ? !path : link.route == path;
  return (
    <li className={active ? 'active' : ''}>
      <Link to={link.route}>
        {link.name}
      </Link>
    </li>
  )
}

const NavBar = ({ small, path }) => (
  <nav className={`main-nav ${ small ? '--small' : ''}`}>
    <ul>
      {navLinks.map((link) => (
        <NavLink link={link} path={path} />
      ))}
    </ul>
  </nav>
);

export default NavBar;
