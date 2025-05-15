import { configureStore } from '@reduxjs/toolkit'

import produtosReducer from './reducers/produtos'
import favoritosReducer from './reducers/favoritos'
import promocaoReducer from './reducers/promocao'
import carrinhoReducer from './reducers/carrinho'

const store = configureStore({
  reducer: {
    produtos: produtosReducer,
    promocao: promocaoReducer,
    favoritos: favoritosReducer,
    carrinho: carrinhoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
