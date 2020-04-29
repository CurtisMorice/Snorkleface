import React from 'react';
import { Link } from "gatsby"
const Header = () => {
  return (
    <header>
      <a
        href="https://github.com/CurtisMorice"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1> Curtis Morice </h1>
      </a>
      <nav>
        <Link to="/#"> About Me </Link> <Link to="/resume"> Résumé </Link>
        <Link to="/projects"> Projects </Link>
      </nav>
    </header>
  )
}
export default Header