import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ItemCarrinho {
  id: number
  nome: string
  imagem: string
  descricao: string
  preco: number
  quantidade: number
}

interface CarrinhoState {
  itens: ItemCarrinho[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<ItemCarrinho>) {
      const itemExistente = state.itens.find(
        (item) => item.id === action.payload.id
      )
      if (itemExistente) {
        itemExistente.quantidade += 1
      } else {
        state.itens.push(action.payload)
      }
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    atualizarQuantidade(
      state,
      action: PayloadAction<{ id: number; quantidade: number }>
    ) {
      const item = state.itens.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantidade = action.payload.quantidade
      }
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, atualizarQuantidade } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
