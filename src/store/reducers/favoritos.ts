import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const favoritosSlice = createSlice({
  name: 'favorito',
  initialState: [] as number[],
  reducers: {
    adicionar: (state, action: PayloadAction<number>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((id) => id !== action.payload)
    }
  }
})

export const { adicionar, remover } = favoritosSlice.actions
export default favoritosSlice.reducer
