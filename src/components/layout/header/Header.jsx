import React, { useState } from 'react'
import logo from "../../../assets/logo.webp"

import "./header.scss"
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [lang, setLang] = useState("RU");

  return (
    <header className='header'>
      <div className="container">
        <nav className='header__nav'>

          <NavLink to={"/"} className="header__nav__logo">
            <img src={logo} alt="header-logo" />
          </NavLink>

          <ul className="header__nav__item">

            <li className="header__nav__list">
              <NavLink to={"/"}>Главная</NavLink>
            </li>

            <li className="header__nav__list">
              <NavLink to={"/about"}>О компании</NavLink>
            </li>

            <li className="header__nav__list">
              <NavLink to={"/post"}>Поставщики</NavLink>
            </li>

            {/* <li className="header__nav__list">
              <NavLink to={"/news"}>Новости</NavLink>
            </li> */}

            <li className="header__nav__list">
              <NavLink to={"/logistic"}>Логистический центр</NavLink>
            </li>

            <div className="header__lang">
              {["RU", "EN"].map((l) => (
                <button
                  key={l}
                  className={`header__lang__btn ${lang === l ? "active" : ""}`}
                  onClick={() => setLang(l)}>
                  {l}
                </button>
              ))}
            </div>
          </ul>

          <div className="header__nav__right">
            <NavLink className='header__nav__right-btns' to={"/contact"}>
              Контакты
            </NavLink>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Header