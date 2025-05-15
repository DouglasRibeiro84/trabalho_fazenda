import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerCarrinho = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  min-height: 68vh;
  margin-top: 96px;
  height: auto;
  padding: 36px 0;
  font-weight: bold;
  color: ${cores.marrom};

  h2 {
    text-align: center;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const CarrinhoItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  padding: 20px;
  border-bottom: 4px double ${cores.marrom};
  border-top: 4px double ${cores.marrom};

  img {
    width: 20%;
    border-radius: 16px;
  }

  label {
    font-size: 18px;
    margin-bottom: 4px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 12px;

    img {
      width: 50%;
      margin-bottom: 12px;
    }
  }
`

export const InfoProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    align-items: center;
  }
`

export const QuantidadeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 12px 0;
  }
`

export const InputQuantidade = styled.input`
  width: 60px;
  text-align: center;
  font-size: 16px;
  padding: 0 6px;
  height: 30px;
  border: none;
  background-color: rgba(122, 122, 122, 0.32);
  border-radius: 0px;
  color: ${cores.marrom};
  font-weight: bold;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const BotaoQuantidade = styled.button`
  background-color: ${cores.marrom};
  color: white;
  border: none;
  height: 30px;
  padding: 0px 16px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;

  &:first-child {
    border-radius: 12px 0 0 12px;
  }

  &:last-child {
    border-radius: 0 12px 12px 0;
  }

  &:hover {
    background-color: #5e3b1f;
  }
`

export const ValorFinal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 16px;
  font-size: 20px;

  @media (max-width: 768px) {
    padding: 12px 0;
  }
`

export const Infositem = styled.div`
  padding: 16px;

  p {
    text-align: left;
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 8px 0;
    p {
      padding: 6px 0;
      text-align: center;
    }
  }
`

export const ValorItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 0;

  p {
    text-align: right;
    padding: 10px;
  }

  @media (max-width: 768px) {
    p {
      text-align: center;
      padding: 6px 0;
    }
  }
`

export const BtnRemover = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: transparent;
  font-size: 32px;
  font-weight: bold;
  color: #ff6666;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 28px;
    top: 8px;
    right: 8px;
  }
`

export const BtnComprar = styled.button`
  background-color: ${cores.marrom};
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 24px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5e3b1f;
  }

  &:active {
    background-color: #4a2e15;
  }

  &:focus {
    outline: 3px solid ${cores.marrom_claro};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
