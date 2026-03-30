import React, { useState, useRef, useEffect } from 'react'
import img1 from "../../assets/catalog/img1.jpg"
import img2 from "../../assets/catalog/img2.jpg"
import img3 from "../../assets/catalog/img3.jpg"
import img4 from "../../assets/catalog/img4.jpg"
import img5 from "../../assets/catalog/img5.jpg"
import img6 from "../../assets/catalog/img6.jpg"
import "./catalog.scss"

const CatalogData = [
  {
    id: 1,
    title: "ТРАНСМИССИЯ",
    img: img1
  },
  {
    id: 2,
    title: "ПОДВЕСКА",
    img: img2
  },
  {
    id: 3,
    title: "ДВИГАТЕЛЬ",
    img: img3
  },
  {
    id: 4,
    title: "ЭЛЕКТРИЧЕСКАЯ ЧАСТЬ",
    img: img4
  },
  {
    id: 5,
    title: "ТОРМОЗНАЯ СИСТЕМА",
    img: img5
  },
  {
    id: 6,
    title: "РЕЗИНОВЫЕ ИЗДЕЛИЯ",
    img: img6
  }
]

const Catalog = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

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
      <h1 className="catalog-title">ПРОДУКЦИЯ ПО КАТЕГОРИЯМ</h1>
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
                Подробнее
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