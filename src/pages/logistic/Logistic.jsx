import React, { useEffect } from 'react'
import img from "../../assets/uzb-map.webp"
import "./logistic.scss"
import Maps from '../../components/maps/Maps'
import { useTranslation } from 'react-i18next'

const Logistic = () => {
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='logistic container'>
                <h2 className='logistic-title'>{t("logistic_title")}</h2>

                <div className="logistic__boxs">
                    <div className="logistic__boxs-left">
                        <img src={img} alt="uzb map" />
                    </div>

                    <div className="logistic__boxs-right">
                        <p className="logistic__boxs-right-title">
                            {t("logistic_text")}
                        </p>
                    </div>
                </div>
            </div>
            <Maps />
        </>
    )
}

export default Logistic