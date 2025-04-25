import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 620px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-top: 100px;
`

export const Titulo = styled.div`
  color: ${cores.branca};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 100px;

  h2,
  p {
    width: 450px;
    text-align: left;
    text-shadow: 4px 4px 6px ${cores.preta};
  }

  h2 {
    font-size: 36px;
    max-width: 450px;
  }

  p {
    font-size: 24px;
    margin-top: 16px;
  }
`
