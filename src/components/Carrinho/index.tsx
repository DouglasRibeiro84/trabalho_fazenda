import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  removerDoCarrinho,
  atualizarQuantidade
} from '../../store/reducers/carrinho'

import {
  CarrinhoItem,
  ContainerCarrinho,
  QuantidadeContainer,
  BotaoQuantidade,
  InputQuantidade,
  Infositem,
  ValorItem,
  BtnRemover,
  BtnComprar,
  ValorFinal
} from './styles'

const Carrinho = () => {
  const dispatch = useDispatch()

  const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens)

  const gerarMensagemWhatsApp = () => {
    const valorTotal = itensCarrinho.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    )

    const mensagem = itensCarrinho
      .map((item) => {
        return `• *${item.nome}*\n  Quantidade: ${
          item.quantidade
        }\n  Valor unitário: R$ ${item.preco.toFixed(2)}\n  Subtotal: R$ ${(
          item.preco * item.quantidade
        ).toFixed(2)}`
      })
      .join('\n\n')

    const mensagemCompleta =
      `Olá! Segue abaixo o detalhamento do meu pedido:\n\n` +
      mensagem +
      `\n\n*Total do pedido:* R$ ${valorTotal.toFixed(2)}\n\n` +
      `Caso tenha alguma dúvida ou deseje confirmar, por favor, me avise. Estou à disposição para ajudar!\n\n` +
      `Obrigado pela preferência!`

    const url = `https://wa.me/41996674903?text=${encodeURIComponent(
      mensagemCompleta
    )}`

    window.open(url, '_blank')
  }

  const valorTotal = itensCarrinho.reduce((total, item) => {
    return total + item.preco * item.quantidade
  }, 0)

  const aumentar = (id: number, quantidadeAtual: number) => {
    dispatch(atualizarQuantidade({ id, quantidade: quantidadeAtual + 1 }))
  }

  const diminuir = (id: number, quantidadeAtual: number) => {
    if (quantidadeAtual > 1) {
      dispatch(atualizarQuantidade({ id, quantidade: quantidadeAtual - 1 }))
    }
  }

  const handleChangeInput = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valor = parseInt(e.target.value, 10)
    if (!isNaN(valor) && valor > 0) {
      dispatch(atualizarQuantidade({ id, quantidade: valor }))
    }
  }

  return (
    <ContainerCarrinho>
      <h2>Meu carrinho</h2>
      <ul>
        {itensCarrinho.map((item) => (
          <CarrinhoItem key={item.id}>
            <img src={item.imagem} alt={item.nome} />
            <Infositem>
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
            </Infositem>
            <ValorItem>
              <label htmlFor={`qtd-${item.id}`}>Quantidade</label>
              <QuantidadeContainer>
                <BotaoQuantidade
                  onClick={() => diminuir(item.id, item.quantidade)}
                >
                  -
                </BotaoQuantidade>
                <InputQuantidade
                  id={`qtd-${item.id}`}
                  type="number"
                  value={item.quantidade}
                  onChange={(e) => handleChangeInput(item.id, e)}
                />
                <BotaoQuantidade
                  onClick={() => aumentar(item.id, item.quantidade)}
                >
                  +
                </BotaoQuantidade>
              </QuantidadeContainer>
              <div>
                <p>R$ {(item.preco * item.quantidade).toFixed(2)}</p>
              </div>
            </ValorItem>
            <BtnRemover onClick={() => dispatch(removerDoCarrinho(item.id))}>
              <i className="bi bi-x"></i>
            </BtnRemover>
          </CarrinhoItem>
        ))}
      </ul>
      <ValorFinal>
        <h3>Total: R$ {valorTotal.toFixed(2)}</h3>
      </ValorFinal>

      <BtnComprar onClick={gerarMensagemWhatsApp}>
        Enviar Pedido para o WhatsApp
      </BtnComprar>
    </ContainerCarrinho>
  )
}

export default Carrinho
