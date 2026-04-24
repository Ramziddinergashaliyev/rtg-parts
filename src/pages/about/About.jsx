import React, { useEffect } from 'react'
import img from "../../assets/aboutbg.webp"
import img1 from "../../assets/certificate/img1.webp"
import img2 from "../../assets/certificate/img2.webp"
import img3 from "../../assets/certificate/img3.webp"
import img4 from "../../assets/certificate/img4.webp"

import "./about.scss"
import Maps from '../../components/maps/Maps'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='about container'>
        <h2 className="about__title">{t("about_page_title")}</h2>

        <div className="about__top">

          <div className="about__top__left">
            <img className='about__top__left-img' src={img} alt="about-img" />
          </div>

          <div className="about__top__right">
            <p className="about__top__right-text">
              <span>Records Trading Group</span> {t("about_p1")}
            </p>

            <p className="about__top__right-text">
              {t("about_p2")}
            </p>

            <p className="about__top__right-text">
              {t("about_p3")}
            </p>
          </div>
        </div>

        <div className="about__info">
          <div className="about__info-title">{t("certificates")}</div>

          <div className="about__info-imgs">
            <img src={img1} alt="certificate1" />
            <img src={img2} alt="certificate2" />
            <img src={img3} alt="certificate3" />
            <img src={img4} alt="certificate4" />
          </div>

        </div>
      </div>

      <Maps />
    </>
  )
}

export default About