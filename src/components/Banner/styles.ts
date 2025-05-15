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
  margin-top: 96px;
`

export const Titulo = styled.div`
  color: ${cores.branca};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 160px;

  transition: transform 0.5s ease-in-out;
  animation: bounce 1.7s ease-in-out infinite;

  @keyframes bounce {
    0% {
      transform: translateY(4px);
      text-shadow: 2px 2px 6px ${cores.preta};
    }
    50% {
      transform: translateY(-10px);
      text-shadow: 2px 2px 8px ${cores.preta}, 0 0 4px ${cores.preta};
    }
    100% {
      transform: translateY(4px);
      text-shadow: 2px 2px 8px ${cores.preta};
    }
  }

  h2,
  p {
    width: 450px;
    text-align: left;
  }

  h2 {
    font-size: 36px;
    max-width: 450px;
  }

  p {
    font-size: 24px;
    margin-top: 16px;
  }

  @media (max-width: 748px) {
    padding: 16px 8px;
    align-items: flex-end;

    h2,
    p {
      width: 70%;
    }
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 18px;
    }
  }
`
