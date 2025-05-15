import { ReactNode, useRef } from 'react'
import { Sessao_Produtos } from './styles'
import {
  IconeDireita,
  IconeEsquerda,
  ContainerProdutos,
  ProdutosItens
} from './styles'

type Props = {
  titulo: string
  background?: string
  children: ReactNode
  id: string
}

const ListaDeProdutos = ({ titulo, background, children, id }: Props) => {
  const produtosRef = useRef<HTMLUListElement | null>(null)

  const scrollRight = () => {
    if (produtosRef.current) {
      const larguraScroll = produtosRef.current.offsetWidth * 1
      produtosRef.current.scrollBy({
        left: larguraScroll,
        behavior: 'smooth'
      })
    }
  }

  const scrollLeft = () => {
    if (produtosRef.current) {
      const larguraScroll = produtosRef.current.offsetWidth * 1
      produtosRef.current.scrollBy({
        left: -larguraScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Sessao_Produtos style={{ backgroundColor: background }} id={id}>
      <h2>{titulo}</h2>
      <ContainerProdutos>
        <IconeEsquerda onClick={scrollLeft}>
          <i className="bi bi-arrow-left" />
        </IconeEsquerda>
        <ProdutosItens ref={produtosRef}>{children}</ProdutosItens>
        <IconeDireita onClick={scrollRight}>
          <i className="bi bi-arrow-right" />
        </IconeDireita>
      </ContainerProdutos>
    </Sessao_Produtos>
  )
}

export default ListaDeProdutos
