import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerSobre = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  padding: 40px 0;
  color: ${cores.marrom};
  gap: 36px;
  align-items: center;

  img {
    width: 150%;
    border-radius: 16px;
  }

  h2 {
    text-align: center;
    border-bottom: 2px solid ${cores.marrom};
    margin-bottom: 8px;
    font-family: 'Rochester', cursive;
    font-size: 30px;
  }

  p {
    padding: 16px;
  }

  @media (max-width: 748px) {
    display: block;
    width: 80%;

    h2 {
      margin-top: 12px;
    }
    img {
      width: 100%;
    }
  }
`
