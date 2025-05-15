import { createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../types'

import geleia from '../../assets/images/geleia_de_goiaba.svg'
import compota from '../../assets/images/compota_de_manga.jpg'
import doce from '../../assets/images/doce_de_leite.jpg'
import geleiaMorango from '../../assets/images/geleia_de_morango.jpg'
import granola from '../../assets/images/granola.jpg'

const initialState: Produto[] = [
  {
    nome: 'Compota de Manga com Gengibre',
    imagem: compota,
    descricao:
      'Compota de manga com um toque de gengibre, feita com frutas frescas e naturais. Perfeita para sobremesas ou como acompanhamento de queijos.',
    valor: 18.9,
    id: 1
  },
  {
    nome: 'Geleia de Goiaba',
    imagem: geleia,
    descricao:
      'A Geleia de Goiaba é 100% natural, sem conservantes, e perfeita para pães, torradas, bolos e sobremesas. Com 300g de puro sabor da fruta, é uma opção deliciosa e saudável para o seu dia a dia.',
    valor: 15.9,
    id: 2
  },
  {
    nome: 'Doce de Leite Artesanal',
    imagem: doce,
    descricao:
      'Doce de leite cremoso, preparado artesanalmente com leite fresco e sem aditivos. Ideal para sobremesas ou para acompanhar pães.',
    valor: 22.0,
    id: 3
  },
  {
    nome: 'Geleia de morango',
    imagem: geleiaMorango,
    descricao:
      'A Geleia de Morango é 100% natural, sem conservantes, feita com morangos frescos. Perfeita para pães, torradas, bolos e sobremesas. Com 300g de puro sabor da fruta.',
    valor: 17.99,
    id: 4
  },
  {
    nome: 'Granola Sem Glúten',
    imagem: granola,
    descricao:
      'Granola caseira, feita com aveia sem glúten, mel e frutas secas selecionadas. Crocante e nutritiva, é perfeita para acompanhar iogurtes, frutas ou como um lanche saudável no dia a dia. Sem conservantes e cheia de sabor natural.',
    valor: 16.0,
    id: 5
  }
]

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {}
})

export default produtosSlice.reducer
