import React from 'react'
import "./statistic.scss"
import { useTranslation } from 'react-i18next';

const Statistic = () => {
    const { t } = useTranslation();

    return (
        <div className='statistic container'>
            <h1 className="statistic__title">{t("stat_title")}</h1>

            <div className="statistic__info">
                <div className="statistic__info-card">
                    <h2 className='statistic__info-card-title'>20+</h2>
                    <p className='statistic__info-card-text'>{t("stat_years")}</p>
                </div>

                <div className="statistic__info-card">
                    <h2 className='statistic__info-card-title'>100+</h2>
                    <p className='statistic__info-card-text'>{t("stat_partners")}</p>
                </div>

                <div className="statistic__info-card">
                    <h2 className='statistic__info-card-title'>50,000+</h2>
                    <p className='statistic__info-card-text'>{t("stat_clients")}</p>
                </div>
            </div>
        </div>
    )
}

export default Statistic