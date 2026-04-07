import React, { useEffect, useRef } from 'react'
import img1 from "../../assets/news/one.webp"
import img2 from "../../assets/news/two.webp"
import img3 from "../../assets/news/three.webp"
import img4 from "../../assets/news/four.webp"
import './new.scss'

const NewsData = [
    {
        id: 1,
        img: img1,
        title: "MESSE Automechanika FRANKFURT 2018",
        category: "Выставка",
        date: "Октябрь, 2018"
    },
    {
        id: 2,
        img: img2,
        title: "Грандиозное открытие магазина EURO TRACK PARTS CENTER 2023",
        category: "Открытие",
        date: "Март, 2023"
    },
    {
        id: 3,
        img: img3,
        title: "Automechanika Dubai 2019",
        category: "Выставка",
        date: "Июнь, 2019"
    },
    {
        id: 4,
        img: img4,
        title: "Новое поступление корейских автозапчастей 2018",
        category: "Поступление",
        date: "Август, 2018"
    }
]

const New = () => {
    const cardsRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.15 }
        )

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section className='new'>
            <div className='container'>

                <div className='new__header'>
                    <span className='new__tag'>Новости</span>
                    <h2 className='new__title'>Последние <span>новости</span></h2>
                    <p className='new__subtitle'>Следите за нашими последними новостями и мероприятиями</p>
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
                                        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                                    </svg>
                                    {item.date}
                                </span>

                                <h3 className='new__card-title'>{item.title}</h3>

                                <a href='#' className='new__card-link'>
                                    Подробнее
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