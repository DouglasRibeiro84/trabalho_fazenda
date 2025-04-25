import 'bootstrap-icons/font/bootstrap-icons.css'

import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Produtos from './components/Produtos'
import Promocoes from './components/Promocoes'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
        <Banner />
        <Produtos />
        <Promocoes />
        <Footer />
      </Container>
    </>
  )
}

export default App
