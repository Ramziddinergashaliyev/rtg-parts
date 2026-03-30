import React from 'react'
import "./post.scss"
import { POSTDATA } from '../../static'

const Post = () => {
  return (
    <div className='post container'>
      <h1 className='post-title'>Поставщики</h1>

      <div className="post__cards">
        {
          POSTDATA?.map(el => (
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