import styled from 'styled-components'
import { cores } from '../../styles'

export const Rodape = styled.footer`
  background-color: ${cores.marrom_claro};
  padding: 20px 16px 40px;
  color: ${cores.marrom};
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`

export const ContainerFooter = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Contatos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
  gap: 8px;

  h4 {
    margin: 0;
  }

  div {
    font-size: 0.9rem;
  }

  p {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media (max-width: 768px) {
    & > .topo {
      display: flex;
      gap: 120px;
      justify-content: space-between;
      margin-bottom: 8px;
      align-items: center;
    }

    & > .numeros p {
      margin-bottom: 0;
    }
  }
`
export const RedesEndereco = styled.div`
  display: flex;
  gap: 48px;
  flex: 1 1 300px;

  > div {
    flex: 1;
  }

  h4 {
    margin: 0 0 4px 0;
  }

  p {
    margin: 4px 0;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const Copyright = styled.div`
  color: ${cores.marrom};
  background-color: ${cores.marrom_claro};
  text-align: center;
  padding: 16px;
  border-top: 1px solid ${cores.marrom};
  font-size: 0.8rem;
`
