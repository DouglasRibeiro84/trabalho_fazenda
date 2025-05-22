import { useState } from 'react'
import { useSelector } from 'react-redux'

import {
  HeaderBar,
  ContainerHeader,
  LogoContainer,
  Links,
  LinkItem,
  LinkPage,
  Hamburguer,
  LinkTitulo
} from './styles'

import 'bootstrap-icons/font/bootstrap-icons.css'

import logo from '../../assets/images/logo.png'
import { RootState } from '../../store'

type HeaderProps = {
  toggleFavoritos: () => void
}

const Header = ({ toggleFavoritos }: HeaderProps) => {
  const [menuAberto, setMenuAberto] = useState(false)

  const totalItens = useSelector((state: RootState) =>
    state.carrinho.itens.reduce((total, item) => total + item.quantidade, 0)
  )

  return (
    <HeaderBar>
      <ContainerHeader>
        <LogoContainer>
          <LinkTitulo to="/">
            <img src={logo} alt="Do Sitio para você" />
            <h1>Do sitio para você</h1>
          </LinkTitulo>
          <Hamburguer onClick={() => setMenuAberto(!menuAberto)}>
            <i className="bi bi-list" />
          </Hamburguer>
        </LogoContainer>

        <nav>
          <Links className={menuAberto ? 'ativo' : ''}>
            <LinkItem>
              <LinkPage
                to="/"
                onClick={() => sessionStorage.setItem('scrollToId', 'produtos')}
              >
                Produtos <i className="bi bi-bag"></i>
              </LinkPage>
            </LinkItem>

            <LinkItem>
              <LinkPage
                to="/"
                onClick={() =>
                  sessionStorage.setItem('scrollToId', 'promocoes')
                }
              >
                Promoções <i className="bi bi-tags"></i>
              </LinkPage>
            </LinkItem>

            <LinkItem>
              <a onClick={toggleFavoritos}>
                Favoritos <i className="bi bi-heart"></i>
              </a>
            </LinkItem>

            <LinkItem>
              <LinkPage to="/carrinho">
                Carrinho{' '}
                <div>
                  <i className="bi bi-cart"></i>
                  <span>{totalItens}</span>
                </div>
              </LinkPage>
            </LinkItem>
          </Links>
        </nav>
      </ContainerHeader>
    </HeaderBar>
  )
}

export default Header
