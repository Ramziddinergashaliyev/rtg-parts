import React, { useEffect } from 'react'
import img from "../../assets/aboutbg.webp"
import img1 from "../../assets/certificate/img1.webp"
import img2 from "../../assets/certificate/img2.webp"
import img3 from "../../assets/certificate/img3.webp"
import img4 from "../../assets/certificate/img4.webp"

import "./about.scss"
import Maps from '../../components/maps/Maps'

const About = () => {

  useEffect(() => {
    scrollTo(0, 0)
  })

  return (
    <>
      <div className='about container'>
        <h2 className="about__title">О компании</h2>

        <div className="about__top">

          <div className="about__top__left">
            <img className='about__top__left-img' src={img} alt="about-img" />
          </div>

          <div className="about__top__right">
            <p className="about__top__right-text"><span>Records Trading Group</span> компания занимает лидирующие позиции по оптовой поставке запасных частей на узбекский рынок преимущественно для отечественных автомобилей производства GM Uzbekistan, а также моторных масел и охлаждающих жидкостей. Основными приоритетами компании являются: исследование рынка, увеличение числа производителей, производящих только высококачественную продукцию по потребительским запросам, контроль качества поставляемой продукции, расширение и эффективное управление распределительной сетью в регионе, улучшение обслуживания как целых, так и розничных клиентов. Мы работаем в основном с корейскими, японскими и европейскими производителями запасных частей и торговыми марками поставщиков, такими как AtasBX, Alphaline, AMP, Brembo, Corteco, Continental Contitech, CTR (Центральная корпорация), Delphy, D-Only Brake Pads, DRB, Dong Yang Piston , Gates, GMB, JANMOR, Marmot, Mitsuboshi, NPR, NSK, PHC Valeo, Pyung Hwa Global, Shin Hwa, SIB, S-Oil Total Lubricants, Petronas, Tesla Batteries, Elim Electronics Corp. Мы работаем более 10 лет, успешно развиваем, расширяем ассортимент продукции и спектр услуг.</p>
            <p className="about__top__right-text">Торговая группа <span>Records Trading Group</span> провела множество встреч, семинаров и тренингов с персоналом на регулярной основе, которые эффективно способствуют развитию нашей компании. В нашем офисе есть выставочные стенды с выпуском всех наших ключевых партнеров. Наши клиенты могут просматривать и проверять новые модели.</p>
            <p className="about__top__right-text">Мы официальные дистрибьюторы на территории Республики Узбекистан, крупнейшего производителя автозапчастей, смазочных материалов и охлаждающих</p>
          </div>

        </div>

        <div className="about__info">
          <div className="about__info-title">Наши Сертификаты</div>

          <div className="about__info-imgs">
            <img src={img1} alt="about img1" />
            <img src={img2} alt="about img2" />
            <img src={img3} alt="about img3" />
            <img src={img4} alt="about img4" />
          </div>

        </div>
      </div>

      <Maps />
    </>
  )
}

export default About