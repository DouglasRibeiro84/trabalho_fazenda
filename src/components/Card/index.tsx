import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar, remover } from '../../store/reducers/favoritos'
import { adicionarAoCarrinho } from '../../store/reducers/carrinho'
import { Produto } from '../../types/index'
import { Promocao } from '../../types/index'
import { ItemCard, BtnComprar, Preco } from './styles'
import { RootState } from '../../store'

type CardProps = {
  produto: Produto | Promocao
  promocao?: boolean
}

const isPromocao = (item: Produto | Promocao): item is Promocao => {
  return (item as Promocao).valorComDesconto !== undefined
}

const Card = ({ produto, promocao = false }: CardProps) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos)
  const isFavorito = favoritos.includes(produto.id)

  const [isClicked, setIsClicked] = useState(false)

  const toggleFavorito = () => {
    if (isFavorito) {
      dispatch(remover(produto.id))
    } else {
      dispatch(adicionar(produto.id))
    }
  }

  const handleAdicionarAoCarrinho = () => {
    setIsClicked(true)

    const audio = new Audio('/audio/audio_click.mp3')
    audio.play().catch((error) => {
      console.error('Erro ao reproduzir áudio:', error)
    })

    const itemCarrinho = {
      id: produto.id,
      nome: produto.nome,
      descricao: produto.descricao,
      imagem: produto.imagem,
      preco: isPromocao(produto)
        ? produto.valorComDesconto
        : (produto as Produto).valor,
      quantidade: 1
    }

    dispatch(adicionarAoCarrinho(itemCarrinho))

    setTimeout(() => {
      setIsClicked(false)
    }, 1500)
  }

  return (
    <ItemCard>
      <i
        className={`bi ${
          isFavorito ? 'bi-heart-fill' : 'bi-heart'
        } icone-favorito`}
        onClick={toggleFavorito}
      ></i>
      <img src={produto.imagem} alt={produto.nome} />
      <div>
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>

        {promocao ? (
          <>
            <span style={{ textDecoration: 'line-through', color: '#888' }}>
              R${(produto as Promocao).valorOriginal}
            </span>
            <Preco>R${(produto as Promocao).valorComDesconto}</Preco>
          </>
        ) : (
          <Preco>R${(produto as Produto).valor}</Preco>
        )}

        <BtnComprar onClick={handleAdicionarAoCarrinho} $isClicked={isClicked}>
          {isClicked ? 'Adicionado' : 'Comprar'}
        </BtnComprar>
      </div>
    </ItemCard>
  )
}

export default Card
