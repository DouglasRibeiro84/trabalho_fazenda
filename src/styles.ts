import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  preta: '#111',
  marrom: '#6A4E3B',
  marrom_claro: '#F4E8D8'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
export const ProdutosItens = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  justify-content: center;
  text-align: start;
  padding: 0;
  margin: 0;

  li {
    max-width: 280px;
  }
`

export const Card = styled.div`
  background-color: rgba(106, 78, 59, 0.2);
  border-radius: 16px;
  box-shadow: 4px 4px 8px ${cores.marrom};

  img {
    width: 100%;
  }

  div {
    padding: 16px;
  }

  p {
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 10px;
  }
`
export const Preco = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 32px;
`

export const BtnComprar = styled.button`
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 8px;
  border: none;
  background-color: ${cores.marrom};
  color: ${cores.branca};
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 4px 4px 6px ${cores.preta};
  margin-bottom: 16px;
  cursor: pointer;
`
