import React, { useState } from "react";
import { Link } from "react-router-dom";

import './header.css'

function ResponsiveButton({setExpanded}) {
  
  const handleClick = () => {
    setExpanded(prev => 
      prev = !prev
    )
  }
  
  return (
    <div
      onClick={handleClick/*toggleMobileMenu*/}
      className="responsive-button"
    >
      <div className="responsive-button__line"></div>
      <div className="responsive-button__line"></div>
      <div className="responsive-button__line"></div>
    </div>
  );
}

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
    <header className="header">
      <div className="header-logo">
        <h1>logo</h1>
      </div>
      <ResponsiveButton setExpanded={setExpanded} />
      <nav className={expanded === true ? "header-navbar" : "hidden"}>
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
    </header>
  );
}

export { Header } ;