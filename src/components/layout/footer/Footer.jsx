import React from 'react'
import logo1 from "../../../assets/logo/footerlg1.png"
import logo2 from "../../../assets/logo/footerlg2.png"
import "./footer.scss"
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { FiMapPin } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='footer'>
      <div className="footer-container container">

        <div className="footer-imgs">
          <img src={logo1} alt="footer left logo" />
          <img src={logo2} alt="footer right logo" />
        </div>

        <div className="footer-info">
          <a className='footer-info-link' href="tel: +998 71 202 46 62"><FaPhoneAlt />+998 71 202 46 62</a>
          <a className='footer-info-link' href="tel: +998 71 202 46 63"><FaPhoneAlt />+998 71 202 46 63</a>
          <a className='footer-info-link' href="tel: +998 71 203 20 30"><FaPhoneAlt />+998 71 203 20 30</a>
        </div>

        <div className="footer-email">
          <a className='footer-email-text' href="mailTo: info@rtgparts.uz"><MdOutlineMail />info@rtgparts.uz</a>
          <p className='footer-email-text'><FiMapPin />
            Яккасарайский р-н, "Мухандислар МФЙ", ул.Мукими дом 2
          </p>
        </div>

      </div>

      <p className="footer-bottom-title">{t("2026")}</p>
    </footer>
  )
}

export default Footer