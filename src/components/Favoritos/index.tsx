import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { remover } from '../../store/reducers/favoritos'
import { adicionarAoCarrinho } from '../../store/reducers/carrinho'

import {
  BarraFavoritos,
  BtnCarrinho,
  BtnClose,
  BtnFavoritos,
  ItensFavoritos
} from './styles'
import { Produto, Promocao } from '../../types/index'

type Props = {
  visivel: boolean
  toggleFavoritos: () => void
}

const isPromocao = (item: Produto | Promocao): item is Promocao => {
  return (item as Promocao).valorComDesconto !== undefined
}

const Favoritos = ({ visivel, toggleFavoritos }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos)
  const produtos = useSelector((state: RootState) => state.produtos)
  const promocoes = useSelector((state: RootState) => state.promocao)

  const todosItens: (Produto | Promocao)[] = [...produtos, ...promocoes]
  const itensFavoritos = todosItens.filter((item) =>
    favoritos.includes(item.id)
  )

  const listaRef = useRef<HTMLUListElement>(null)
  const [clicados, setClicados] = useState<number[]>([])

  useEffect(() => {
    const lis = listaRef.current?.querySelectorAll('li')
    lis?.forEach((li, index) => {
      setTimeout(() => {
        li.classList.add('fade-in')
      }, index * 100)
    })
  }, [itensFavoritos])

  const handleRemoverComAnimacao = (id: number) => {
    const li = document.getElementById(`fav-${id}`)
    if (li) {
      li.classList.remove('fade-in')
      li.classList.add('fade-out')

      setTimeout(() => {
        dispatch(remover(id))
      }, 400)
    }
  }

  const handleAdicionarAoCarrinho = (item: Produto | Promocao) => {
    const audio = new Audio('/audio/audio_click.mp3')
    audio.play().catch((error) => {
      console.error('Erro ao reproduzir áudio:', error)
    })

    const itemCarrinho = {
      id: item.id,
      nome: item.nome,
      imagem: item.imagem,
      descricao: item.descricao,
      preco: Number(
        isPromocao(item) ? item.valorComDesconto : (item as Produto).valor
      ),
      quantidade: 1
    }

    dispatch(adicionarAoCarrinho(itemCarrinho))

    setClicados((prev) => [...prev, item.id])
    setTimeout(() => {
      setClicados((prev) => prev.filter((clickedId) => clickedId !== item.id))
    }, 1500)
  }

  return (
    <BarraFavoritos className={visivel ? 'visible' : ''}>
      <h3>Itens Favoritos</h3>
      <ItensFavoritos ref={listaRef}>
        {itensFavoritos.length > 0 ? (
          itensFavoritos.map((item) => (
            <li key={item.id} id={`fav-${item.id}`}>
              <img src={item.imagem} alt={item.nome} />
              <div className="info">
                <h4>{item.nome}</h4>
                <div className="precos">
                  {isPromocao(item) ? (
                    <>
                      <span className="riscado">R${item.valorOriginal}</span>
                      <span className="preco">R${item.valorComDesconto}</span>
                    </>
                  ) : (
                    <span className="preco">R${item.valor}</span>
                  )}
                </div>
                <BtnCarrinho
                  onClick={() => handleAdicionarAoCarrinho(item)}
                  isClicked={clicados.includes(item.id)}
                >
                  {clicados.includes(item.id)
                    ? 'Adicionado'
                    : 'Adicionar ao carrinho'}
                </BtnCarrinho>
              </div>
              <BtnFavoritos
                onClick={() => handleRemoverComAnimacao(item.id)}
                aria-label={`Remover ${item.nome} dos favoritos`}
                title="Remover dos favoritos"
              >
                <i className="bi bi-heart-fill"></i>
              </BtnFavoritos>
            </li>
          ))
        ) : (
          <p>Nenhum item nos favoritos</p>
        )}
      </ItensFavoritos>
      <BtnClose onClick={toggleFavoritos}>Fechar favoritos</BtnClose>
    </BarraFavoritos>
  )
}

export default Favoritos
