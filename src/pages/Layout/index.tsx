import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../components/Header'
import Favoritos from '../../components/Favoritos'
import Footer from '../../components/Footer'

const Layout = () => {
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false)

  const toggleFavoritos = () => {
    setMostrarFavoritos((prev) => !prev)
  }

  return (
    <>
      <Header toggleFavoritos={toggleFavoritos} />
      <Favoritos visivel={mostrarFavoritos} toggleFavoritos={toggleFavoritos} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
