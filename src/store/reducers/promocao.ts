import { createSlice } from '@reduxjs/toolkit'
import { Promocao } from '../../types'

import biscoitoAveia from '../../assets/images/biscoito_aveia.jpg'
import leiteAmendoas from '../../assets/images/leite_amedoas.jpg'
import manteigacacau from '../../assets/images/manteiga_cacau.jpg'
import mixCastanhas from '../../assets/images/mix_castanhas.jpg'
import cafeOrganico from '../../assets/images/cafe_organico.jpg'

const initialState: Promocao[] = [
  {
    nome: 'Biscoito Integral de Aveia',
    imagem: biscoitoAveia,
    descricao:
      'Biscoitos integrais de aveia, feitos com ingredientes naturais e sem conservantes. Uma opção saudável para o seu lanche ou para acompanhar o café da manhã.',
    valorOriginal: 13.9,
    id: 10,
    valorComDesconto: 9.9
  },
  {
    nome: 'Leite de Amêndoas',
    imagem: leiteAmendoas,
    descricao:
      'Leite de amêndoas 100% natural, sem conservantes e sem adição de açúcar. Uma excelente alternativa ao leite tradicional, ideal para intolerantes à lactose ou veganos.',
    valorOriginal: 22.0,
    id: 11,
    valorComDesconto: 16.0
  },
  {
    nome: 'Manteiga de Cacau Pura',
    imagem: manteigacacau,
    descricao:
      'Manteiga de cacau 100% pura e natural, ótima para cuidados com a pele ou para uso em receitas saudáveis. Rico em antioxidantes e hidratante natural.',
    valorOriginal: 16.0,
    id: 12,
    valorComDesconto: 12.99
  },
  {
    nome: 'Mix de Castanhas',
    imagem: mixCastanhas,
    descricao:
      'Mix de castanhas variadas (caju, nozes, amêndoas, etc.), uma opção saudável e energética para lanches ou para complementar suas refeições.',
    valorOriginal: 23.0,
    id: 13,
    valorComDesconto: 19.99
  },
  {
    nome: 'Café Orgânico',
    imagem: cafeOrganico,
    descricao:
      'Café orgânico de alta qualidade, com grãos selecionados e 100% naturais. Perfeito para quem busca uma bebida saudável e sem agrotóxicos.',
    valorOriginal: 18.9,
    id: 14,
    valorComDesconto: 19.99
  }
]

const promocaoSlice = createSlice({
  name: 'promocoes',
  initialState,
  reducers: {}
})

export default promocaoSlice.reducer
