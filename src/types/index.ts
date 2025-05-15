export interface Produto {
  nome: string
  imagem: string
  descricao: string
  valor: number
  id: number
  desconto?: number
}

export interface Promocao {
  nome: string
  imagem: string
  descricao: string
  valorOriginal: number
  valorComDesconto: number
  id: number
}
