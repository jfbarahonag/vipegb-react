import React, { useState } from "react";
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

  const [expanded, setExpanded] = useState(false)

  return (
    <section className="header">
      <div className="header-logo">
        <h1>logo</h1>
      </div>

      <nav className="header-navbar">
        <ul className="header-navbar__list">
          {sections.map((section, idx) => (
            <li key={idx} className="header-navbar__list-item">
              <Link to={`/${Object.keys(section)[0]}`}>
                {Object.values(section)[0]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav></nav>
    </section>
  );
}

export { Header } ;