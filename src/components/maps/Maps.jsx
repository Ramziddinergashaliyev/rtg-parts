import React from 'react'
import "./maps.scss"

const Maps = () => {
  return (
    <div className='maps' style={{ position: "relative", overflow: "hidden" }}>
      <a href="https://yandex.uz/maps/org/116799243047/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Exzap</a>
      <a href="https://yandex.uz/maps/105813/tashkent-province/category/production_of_auto_parts/184105290/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Производство автозапчастей в Ташкентской области</a>
      <a href="https://yandex.uz/maps/105813/tashkent-province/category/lubricants/184106702/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "28px" }}>Смазочные материалы в Ташкентской области</a>
      <iframe
        src="https://yandex.uz/map-widget/v1/org/116799243047/?from=mapframe&ll=69.159030%2C41.200640&z=15"
        frameBorder="0"
        allowFullScreen={true}
        style={{ position: "relative", width: "100%", height: "300px" }}
      />
    </div>
  )
}


export default Maps