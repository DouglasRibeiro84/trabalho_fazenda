import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import Produtos from '../../components/Produtos'
import Promocoes from '../../components/Promocoes'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    const scrollToId = sessionStorage.getItem('scrollToId')
    if (scrollToId) {
      const target = document.getElementById(scrollToId)
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 200)
      }
      sessionStorage.removeItem('scrollToId')
    }
  }, [location])

  return (
    <div>
      <Banner />
      <Produtos />
      <Promocoes />
    </div>
  )
}

export default Home
