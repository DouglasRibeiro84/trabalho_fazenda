import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Sessao_Promocoes = styled.section`
  background-color: ${cores.branca};
  width: 100%;
  color: ${cores.marrom};
  text-align: center;
  padding-bottom: 60px;

  h2 {
    font-family: 'Rochester', cursive;
    font-size: 30px;
    padding: 36px 20px 4px 20px;
    border-bottom: solid 2px ${cores.marrom};
    display: inline-block;
    margin-bottom: 40px;
  }
`
export const PrecoPromocao = styled.span`
  text-decoration: line-through;
`
