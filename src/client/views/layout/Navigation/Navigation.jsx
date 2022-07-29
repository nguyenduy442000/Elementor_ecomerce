import React from "react";

import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import Logo from "../../.././assets/logo/logo.svg";
import "./Navigation.scss";
const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul className="navigation__menu">
          <li className="menu-title">
           Home
          </li>
          <li className="menu-title">
            Catalogue
          </li>
          <li className="menu-title">
            About
          </li>
          <li className="menu-title">
            Blog
          </li>
          <li className="menu-title menu__list">
            Info
        
           <ul className="list__item">
              <li className="list__item--font">Concat</li>
              <li className="list__item--font">Size guide</li>
              <li className="list__item--font">Payment</li>
              <li className="list__item--font">Delivery</li>
              <li className="list__item--font">Order tracking</li>
              <li className="list__item--font">Exchanges & returns</li>
              <li className="list__item--font">Sitemap</li>
              <li className="list__item--font">404 error page</li>
              <li className="list__item--font">Demo design system</li>
            </ul>
        
          </li>
        </ul>
        <div className="navigation__logo">
          <img src={Logo} alt="Logo" width="150px" height="32.48px" />
        </div>
        <div className="navigation__icon">
          <FiSearch />
          <span>
            <FiUser />
          </span>
          <FiShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
