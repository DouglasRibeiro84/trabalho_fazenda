import { HeaderBar, Links, LinkItem } from './styles'
import 'bootstrap-icons/font/bootstrap-icons.css'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Do Sitio para você" />
      <h1>Do sitio para você</h1>
    </div>
    <nav>
      <Links>
        <LinkItem>
          <a href="">
            Produtos<i className="bi bi-bag"></i>
          </a>
        </LinkItem>
        <LinkItem>
          <a href="">
            Promoções<i className="bi bi-tags"></i>
          </a>
        </LinkItem>
        <LinkItem>
          <a href="">
            Carrinho<i className="bi bi-cart"></i>
          </a>
        </LinkItem>
      </Links>
    </nav>
  </HeaderBar>
)

export default Header
