import React from "react";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

import "./footer.css";

function Footer({}) {
  const links = [
    {
      title: () => {
        return <Instagram fontSize="large" />;
      },
      url: "https://instagram.com/vipegb?igshid=3vtsczsylf0z",
    },
    {
      title: () => {
        return <WhatsApp fontSize="large" />;
      },
      url: "https://wa.link/pdxz67",
    },
    {
      title: () => {
        return <Facebook fontSize="large" />;
      },
      url: "https://www.facebook.com/vipegb",
    },
  ];
  return (
    <footer className="footer">
      <nav className="footer-navbar">
        <ul className="footer-navbar__list">
          {links.map((link) => (
            <li key={link.url} className="footer-navbar__list-item">
              <a
                target='_blank'
                href={link.url}
              >
                {link.title()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export { Footer };
