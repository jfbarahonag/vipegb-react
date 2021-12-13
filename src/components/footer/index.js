import React from "react";

import "./footer.css";

function Footer({}) {
  const links = [
    {
      title: "FB",
      url: "/",
    },
    {
      title: "IG",
      url: "/",
    },
  ];
  return (
    <footer className="footer">
      <nav className="footer-navbar">
        <ul className="footer-navbar__list">
          {links.map((link) => (
            <li key={link.url} className="footer-navbar__list-item">
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export { Footer };
