import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Post from './pages/post/Post'
import News from './pages/news/News'
import Logistic from './pages/logistic/Logistic'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post' element={<Post />} />
          <Route path='/news' element={<News />} />
          <Route path='/logistic' element={<Logistic />} />
        </Route>
      </Routes>
    </>
  )
}

export default App