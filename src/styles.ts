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

export const Preco = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: block;
`
