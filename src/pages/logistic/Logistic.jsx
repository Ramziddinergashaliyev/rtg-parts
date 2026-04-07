import React, { useEffect } from 'react'
import img from "../../assets/uzb-map.png"
import "./logistic.scss"
import Maps from '../../components/maps/Maps'

const Logistic = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className='logistic container'>
                <h2 className='logistic-title'>Логистический центр</h2>

                <div className="logistic__boxs">
                    <div className="logistic__boxs-left">
                        <img src={img} alt="uzb map" />
                    </div>

                    <div className="logistic__boxs-right">
                        <p className="logistic__boxs-right-title">
                            Компания имеет ряд логистических центров в крупных городах Узбекистана, для еще большей эффективности распределения нашей продукции. Главный логистический центр с подъездной дорогой и собственным таможенным терминалом удобно расположен для региональных оптовиков, на стыке столицы Ташкента, недалеко от проезжей части междугородной трассы. В логистическом центре есть все для комфортного и быстрого обслуживания оптовых покупателей. Эффективное обслуживание оптовых покупателей, простота составления процедур подачи заявок, прозрачная ценовая политика и кратчайшее время распространения приобретенных товаров создают лояльность клиентов к нашей компании.
                        </p>
                    </div>
                </div>
            </div>
            <Maps />
        </>
    )
}



export default Logistic