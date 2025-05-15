import styled from 'styled-components'
import { cores } from '../../styles'

export const Sessao_Produtos = styled.section<{ background?: string }>`
  background-color: ${({ background }) => background || 'transparent'};
  width: 100%;
  color: ${cores.marrom};
  text-align: center;
  white-space: nowrap;

  h2 {
    font-family: 'Rochester', cursive;
    font-size: 30px;
    padding: 24px 20px 4px 20px;
    border-bottom: solid 2px ${cores.marrom};
    display: inline-block;
    margin-bottom: 16px;
  }

  @media (max-width: 748px) {
    h2 {
      font-size: 24px;
      padding: 16px;
    }
  }
`

export const IconeBase = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background: ${cores.branca};
  border: 2px solid ${cores.marrom};
  border-radius: 50%;
  padding: 6px 8px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }

  i {
    font-size: 30px;
    color: ${cores.marrom};
    font-weight: bold;
  }

  @media (max-width: 748px) {
    i {
      font-size: 20px;
    }
  }
`
export const IconeDireita = styled(IconeBase)`
  right: 0;
`
export const IconeEsquerda = styled(IconeBase)`
  left: 0;
`

export const ContainerProdutos = styled.div`
  position: relative;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 36px 50px;
  padding-top: 0;

  scroll-behavior: smooth;

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${cores.marrom};
    border-radius: 6px;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${cores.marrom_claro};
  }

  scrollbar-width: thin;
  scrollbar-color: ${cores.marrom} #f1f1f1;

  @media (max-width: 748px) {
    width: 90%;
    padding-bottom: 24px;
  }
`
export const ProdutosItens = styled.ul`
  display: flex;
  overflow-x: auto;
  padding: 60px;
  margin: 0;
  gap: 40px;
  li:first-child {
    margin-left: 0;
  }

  @media (max-width: 748px) {
    padding: 40px 16px;

    li:first-child {
      margin-left: 0;
    }
  }
`
