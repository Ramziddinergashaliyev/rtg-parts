// import React, { useState } from 'react'

// import logo from "../../../assets/logo.webp"

// import "./header.scss"
// import { NavLink } from 'react-router-dom';
// import { IoMdClose } from 'react-icons/io';
// import { FiMenu } from 'react-icons/fi';

// const Header = () => {
//   const [lang, setLang] = useState("RU");
//   const [hide, setHide] = useState(false)

//   return (
//     <header className='header'>
//       <div className="container">
//         <nav className='header__nav'>

//           <NavLink to={"/"} className="header__nav__logo">
//             <img src={logo} alt="header-logo" />
//           </NavLink>

//           {hide && (
//             <div className="header__overlay" onClick={() => setHide(false)} />
//           )}

//           <ul className={`header__nav__item ${hide ? "header__nav__item-hide" : ""}`}>

//             <li className="header__nav__list">
//               <NavLink to={"/"}>Главная</NavLink>
//             </li>

//             <li className="header__nav__list">
//               <NavLink to={"/about"}>О компании</NavLink>
//             </li>

//             <li className="header__nav__list">
//               <NavLink to={"/post"}>Поставщики</NavLink>
//             </li>

//             <li className="header__nav__list">
//               <NavLink to={"/logistic"}>Логистический центр</NavLink>
//             </li>

//             <div className="header__lang">
//               {["RU", "EN"].map((l) => (
//                 <button
//                   key={l}
//                   className={`header__lang__btn ${lang === l ? "active" : ""}`}
//                   onClick={() => setLang(l)}>
//                   {l}
//                 </button>
//               ))}
//             </div>

//             <button onClick={() => setHide(false)} className="header__nav__list-btn">
//               <IoMdClose />
//             </button>
//           </ul>

//           <div className="header__nav__right">
//             <NavLink className='header__nav__right-btns' to={"/contact"}>
//               Контакты
//             </NavLink>
//             <button onClick={() => setHide(true)} className='header__nav__right-menu'><FiMenu /></button>
//           </div>

//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Header

import React, { useState } from 'react'
import logo from "../../../assets/logo.webp"
import "./header.scss"
import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [hide, setHide] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng); // refreshdan keyin saqlab qoladi
  };

  return (
    <header className='header'>
      <div className="container">
        <nav className='header__nav'>

          <NavLink to={"/"} className="header__nav__logo">
            <img src={logo} alt="header-logo" />
          </NavLink>

          {hide && (
            <div className="header__overlay" onClick={() => setHide(false)} />
          )}

          <ul className={`header__nav__item ${hide ? "header__nav__item-hide" : ""}`}>

            <li className="header__nav__list">
              <NavLink to={"/"}>{t("home")}</NavLink>
            </li>

            <li className="header__nav__list">
              <NavLink to={"/about"}>{t("about")}</NavLink>
            </li>

            <li className="header__nav__list">
              <NavLink to={"/post"}>{t("suppliers")}</NavLink>
            </li>

            <li className="header__nav__list">
              <NavLink to={"/logistic"}>{t("logistic")}</NavLink>
            </li>

            {/* 🌍 LANGUAGE SWITCH */}
            <div className="header__lang">
              {["ru", "en"].map((lng) => (
                <button
                  key={lng}
                  className={`header__lang__btn ${i18n.language === lng ? "active" : ""}`}
                  onClick={() => changeLanguage(lng)}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>

            <button onClick={() => setHide(false)} className="header__nav__list-btn">
              <IoMdClose />
            </button>
          </ul>

          <div className="header__nav__right">
            <NavLink className='header__nav__right-btns' to={"/contact"}>
              {t("contact")}
            </NavLink>
            <button onClick={() => setHide(true)} className='header__nav__right-menu'>
              <FiMenu />
            </button>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Header;