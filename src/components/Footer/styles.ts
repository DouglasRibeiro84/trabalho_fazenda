import styled from 'styled-components'

import { cores } from '../../styles'

export const Rodape = styled.footer`
  display: flex;
  background-color: ${cores.marrom_claro};
  padding: 30px 60px;
  color: ${cores.marrom};
  justify-content: space-between;

  h4 {
    margin-bottom: 16px;
  }

  i {
    margin-right: 8px;
  }

  p {
    margin-bottom: 4px;
  }
`

export const Contatos = styled.div`
  div {
    border-top: 1px solid ${cores.marrom};
    margin-top: 8px;
    padding-top: 8px;
  }
`

export const Copyright = styled.div`
  color: ${cores.marrom};
  background-color: ${cores.marrom_claro};
  text-align: center;
  padding: 16px;
  border-top: 1px solid ${cores.marrom};
`
