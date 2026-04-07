import React from 'react'
import "./home.scss"
import Hero from '../../components/hero/Hero'
import Statistic from '../../components/statistic/Statistic'
import Catalog from '../../components/catalog/Catalog'
import Brands from '../../components/brands/Brands'
import Maps from '../../components/maps/Maps'
import New from '../../components/new/New'
import Leazy from '../../components/leazy/Leazy'

const Home = () => {
  return (
    <>
      <Hero />
      <Statistic />
      <Catalog />
      <Brands />
      <New />
      <Maps />
    </>
  )
}

export default Home