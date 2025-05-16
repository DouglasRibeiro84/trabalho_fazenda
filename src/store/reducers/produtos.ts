import { createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../types'

import geleia from '../../assets/images/geleia_de_goiaba.svg'
import compota from '../../assets/images/compota_de_manga.jpg'
import doce from '../../assets/images/doce_de_leite.jpg'
import geleiaMorango from '../../assets/images/geleia_de_morango.jpg'
import granola from '../../assets/images/granola.jpg'
import paoMel from '../../assets/images/pao_mel.jpg'
import boloCenoura from '../../assets/images/bolo_cenoura.jpg'
import manteiga from '../../assets/images/manteiga.jpg'
import boloMilho from '../../assets/images/bolo_milho.jpg'

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
  },
  {
    nome: 'Pão de Mel Artesanal',
    imagem: paoMel,
    descricao:
      'Pão de mel recheado com doce de leite e cobertura de chocolate meio amargo. Uma delícia artesanal, perfeita para o café da tarde.',
    valor: 7.5,
    id: 6
  },
  {
    nome: 'Bolo de Cenoura com Cobertura',
    imagem: boloCenoura,
    descricao:
      'Bolo caseiro de cenoura com cobertura de chocolate. Receita tradicional com ingredientes naturais e muito sabor.',
    valor: 16.5,
    id: 7
  },
  {
    nome: 'Manteiga Caseira com Sal',
    imagem: manteiga,
    descricao:
      'Manteiga artesanal feita com creme de leite fresco e uma pitada de sal. Textura cremosa e sabor marcante. Sem conservantes.',
    valor: 18.5,
    id: 8
  },
  {
    nome: 'Bolo de Milho Cremoso',
    imagem: boloMilho,
    descricao:
      'Bolo de milho cremoso feito com milho verde natural e leite de coco. Uma receita tradicional com sabor de roça.',
    valor: 15.0,
    id: 9
  }
]

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {}
})

export default produtosSlice.reducer
