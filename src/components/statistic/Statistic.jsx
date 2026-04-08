import React from 'react'
import "./statistic.scss"

const Statistic = () => {
    return (
        <div className='statistic container'>
            <h1 className="statistic__title">RECORDS TRADING GROUP - это</h1>
            <div className="statistic__info">
                <div className="statistic__info-card">
                    <h2 className='statistic__info-card-title'>20+</h2>
                    <p className='statistic__info-card-text'>лет на рынке</p>
                </div>

                <div className="statistic__info-card">
                    <h2 className='statistic__info-card-title'>100+</h2>
                    <p className='statistic__info-card-text'>Партнёров</p>
                </div>

                <div className="statistic__info-card">
                    <h2 className='statistic__info-card-title'>50,000+</h2>
                    <p className='statistic__info-card-text'>довольных клиентов</p>
                </div>
            </div>
        </div>
    )
}

export default Statistic