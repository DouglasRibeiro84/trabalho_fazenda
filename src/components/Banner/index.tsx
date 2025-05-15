import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/banner.gif'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Titulo>
      <h2>Essência Natural</h2>
      <p>O poder da natureza em cada produto.</p>
    </Titulo>
  </Imagem>
)

export default Banner
