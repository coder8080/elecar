import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  const [show, setShow] = useState(false);
  const closeMenu = () => setShow(false);
  const openMenu = () => setShow(true);
  const onScroll = () => {
    const scrollY = window.scrollY;
    const header = document.querySelector(".header");
    if (scrollY >= 50) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <div className="header">
      <nav className="nav container">
        <Link to="/" className="logo">
          <i className="ri-steering-line"></i>
          Elecar
        </Link>
        <div className={`menu ${show ? "show" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="link" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#popular" className="link" onClick={closeMenu}>
                Popular
              </a>
            </li>
            <li className="nav-item">
              <a href="#featured" className="link" onClick={closeMenu}>
                Featured
              </a>
            </li>
          </ul>
          <div className="nav-close" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>
        <div className="nav-toggle" onClick={openMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
