import React, { useEffect } from 'react'
import "./post.scss"
import { POSTDATA, POSTDATAEn } from '../../static'
import { useTranslation } from 'react-i18next'

const Post = () => {
  const { t, i18n } = useTranslation()
  console.log(i18n?.language);

  const DATA = i18n?.language === "en" ? POSTDATAEn : POSTDATA

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='post container'>
      <h1 className='post-title'>{t("Поставщики")}</h1>

      <div className="post__cards">
        {
          DATA?.map(el => (
            <div key={el?.id} className="post__card">

              <div className="post__card-img">
                <img src={el?.img} alt="" />
              </div>

              <div className="post__card-info">
                <h2 className="post__card-info-title">{el?.title}</h2>
                <p className="post__card-info-text">{el?.text}</p>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Post