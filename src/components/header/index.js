import React from "react";
import { Link } from "react-router-dom";

import './header.css'

function Header({ children }) {
  //TODO: sections need to be received as props?
  const sections = [
    { "": "Home" },
    { categories: "Categorias" },
    { contact: "Contacto" },
    { about: "Acerca de nosotros" },
  ]

  return (
    <section className="header">
      <div className="header-logo"></div>

      <nav className="header-navbar"></nav>

      <h2>Hello from header</h2>
      <nav>
        <ul>
          {sections.map((section, idx) => (
            <li key={idx}>
              <Link to={`/${Object.keys(section)[0]}`}>
                {Object.values(section)[0]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export { Header } ;