import { useSelector } from 'react-redux'
import ListaDeProdutos from '../ListaDeProdutos'
import Card from '../Card'
import { cores } from '../../styles'
import { Promocao } from '../../types/index'
import { RootState } from '../../store'

const Promocoes = () => {
  const promocoes = useSelector((state: RootState) => state.promocao)

  return (
    <ListaDeProdutos
      titulo="Promoções"
      background={cores.branca}
      id="promocoes"
    >
      {promocoes.length > 0 ? (
        promocoes.map((promo: Promocao) => (
          <Card key={promo.id} produto={promo} promocao={true} />
        ))
      ) : (
        <p>Não há promoções no momento.</p>
      )}
    </ListaDeProdutos>
  )
}

export default Promocoes
