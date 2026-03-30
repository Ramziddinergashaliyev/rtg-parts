import React from 'react'
import img1 from "../../assets/logo/img1.jpg"
import img2 from "../../assets/logo/img2.png"
import img3 from "../../assets/logo/img3.png"
import img4 from "../../assets/logo/img4.png"
import img5 from "../../assets/logo/img5.png"
import img6 from "../../assets/logo/img6.png"
import img7 from "../../assets/logo/img7.png"
import img8 from "../../assets/logo/img8.png"
import img9 from "../../assets/logo/img9.png"
import img10 from "../../assets/logo/img10.png"
import img11 from "../../assets/logo/img11.png"
import img12 from "../../assets/logo/img12.png"
import img13 from "../../assets/logo/img13.png"
import img14 from "../../assets/logo/img14.png"
import img15 from "../../assets/logo/img15.png"
import img16 from "../../assets/logo/img16.png"
import img17 from "../../assets/logo/img17.png"
import img18 from "../../assets/logo/img18.png"
import img19 from "../../assets/logo/img19.png"
import img20 from "../../assets/logo/img20.png"
import img21 from "../../assets/logo/img21.png"
import img22 from "../../assets/logo/img22.png"
import img23 from "../../assets/logo/img1-23.png"
import img24 from "../../assets/logo/img23.png"
import img25 from "../../assets/logo/img24.png"
import img26 from "../../assets/logo/img25.png"
import img27 from "../../assets/logo/img26.png"
import img28 from "../../assets/logo/img27.png"
import img29 from "../../assets/logo/img28.png"
import img30 from "../../assets/logo/img29.png"
import img31 from "../../assets/logo/img30.png"
import img32 from "../../assets/logo/img31.png"
import img33 from "../../assets/logo/img32.png"
import img34 from "../../assets/logo/img33.png"
import img35 from "../../assets/logo/img34.png"
import img36 from "../../assets/logo/img35.png"
import img37 from "../../assets/logo/img36.png"
import img38 from "../../assets/logo/img37.png"
import img39 from "../../assets/logo/img38.png"
import img40 from "../../assets/logo/img39.png"

import "./brands.scss"

const Brands = () => {

  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40]

  return (
    <div className='brands container'>
      <h3 className="brands-title">Бренды</h3>

      <div className="brands__imgs">
        {
          imgs?.map((el, inx) => (
            <img key={inx} className='brands__imgs-img' src={el} alt="brands img" />
          ))
        }
      </div>

    </div>
  )

}

export default Brands