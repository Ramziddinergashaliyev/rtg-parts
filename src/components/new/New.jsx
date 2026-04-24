import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';

import img1 from "../../assets/news/one.webp"
import img2 from "../../assets/news/two.webp"
import img3 from "../../assets/news/three.webp"
import img4 from "../../assets/news/four.webp"
import './new.scss'

const New = () => {
    const { t } = useTranslation();
    const cardsRef = useRef([])

    const NewsData = [
        { id: 1, img: img1, title: t("news1_title"), category: t("news_cat_exhibition"), date: t("news1_date") },
        { id: 2, img: img2, title: t("news2_title"), category: t("news_cat_opening"), date: t("news2_date") },
        { id: 3, img: img3, title: t("news3_title"), category: t("news_cat_exhibition"), date: t("news3_date") },
        { id: 4, img: img4, title: t("news4_title"), category: t("news_cat_arrival"), date: t("news4_date") }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible')
                })
            },
            { threshold: 0.15 }
        )

        cardsRef.current.forEach((card) => card && observer.observe(card))
        return () => observer.disconnect()
    }, [])

    return (
        <section className='new'>
            <div className='container'>

                <div className='new__header'>
                    <h2 className='new__title'>
                        {t("news_title").split(" ")[0]} <span>{t("news_title").split(" ")[1]}</span>
                    </h2>
                    <p className='new__subtitle'>{t("news_subtitle")}</p>
                </div>

                <div className='new__grid'>
                    {NewsData.map((item, index) => (
                        <article
                            key={item.id}
                            className='new__card'
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{ transitionDelay: `${index * 0.12}s` }}
                        >

                            <div className='new__card-img-wrap'>
                                <img src={item.img} alt={item.title} />
                                <div className='new__card-overlay' />
                                <span className='new__card-category'>{item.category}</span>
                            </div>

                            <div className='new__card-body'>
                                <span className='new__card-date'>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" />
                                        <path d="M16 2v4M8 2v4M3 10h18" />
                                    </svg>
                                    {item.date}
                                </span>

                                <h3 className='new__card-title'>{item.title}</h3>

                                <a href='#' className='new__card-link'>
                                    {t("more")}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default New