import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import img1 from "../../assets/catalog/img1.webp"
import img2 from "../../assets/catalog/img2.webp"
import img3 from "../../assets/catalog/img3.webp"
import img4 from "../../assets/catalog/img4.webp"
import img5 from "../../assets/catalog/img5.webp"
import img6 from "../../assets/catalog/img6.webp"

import "./catalog.scss"

const Catalog = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  const CatalogData = [
    { id: 1, title: t("cat1"), img: img1 },
    { id: 2, title: t("cat2"), img: img2 },
    { id: 3, title: t("cat3"), img: img3 },
    { id: 4, title: t("cat4"), img: img4 },
    { id: 5, title: t("cat5"), img: img5 },
    { id: 6, title: t("cat6"), img: img6 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`catalog container ${visible ? 'is-visible' : ''}`} ref={ref}>
      <h1 className="catalog-title">{t("catalog_title")}</h1>

      <div className="catalog-cards">
        {CatalogData.map((el, i) => (
          <div key={el.id} className="catalog-card" style={{ '--i': i }}>
            <div className="catalog-card-img">
              <img src={el.img} alt={el.title} />
              <div className="catalog-card-overlay" />
            </div>

            <div className="catalog-card-info">
              <h2 className="catalog-card-name">{el.title}</h2>

              <button className="catalog-card-btn">
                {t("more")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catalog