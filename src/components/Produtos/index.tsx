import { useSelector } from 'react-redux'
import ListaDeProdutos from '../ListaDeProdutos'
import Card from '../Card'
import { cores } from '../../styles'

import { Produto } from '../../types/index'

interface RootState {
  produtos: Produto[]
}

const Produtos = () => {
  const produtos = useSelector((state: RootState) => state.produtos)

  return (
    <ListaDeProdutos
      titulo="Conheça nossos produtos"
      background={cores.marrom_claro}
      id="produtos"
    >
      {produtos.map((produto) => (
        <Card key={produto.id} produto={produto} />
      ))}
    </ListaDeProdutos>
  )
}

export default Produtos
