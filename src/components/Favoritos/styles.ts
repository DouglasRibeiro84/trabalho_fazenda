import styled from 'styled-components'
import { cores } from '../../styles'

export const BarraFavoritos = styled.div`
  background-color: #ffffffeb;
  color: ${cores.marrom};
  padding: 16px;
  max-height: 436px;
  overflow-y: auto;
  width: 360px;
  position: fixed;
  right: -360px;
  top: 96px;
  z-index: 3;
  box-shadow: 0px 2px 4px ${cores.preta};
  border-top: none;
  transition: right 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &.visible {
    right: 160px;
  }

  h3 {
    padding-bottom: 6px;
    border-bottom: 2px solid ${cores.marrom};
  }

  @media (max-width: 768px) {
    width: 70%;
    right: -110%;
    top: 110px;

    &.visible {
      right: 0%;
    }
  }
`

export const ItensFavoritos = styled.ul`
  width: 100%;
  margin-bottom: 12px;

  li {
    position: relative;
    display: flex;
    gap: 8px;
    align-items: flex-start;
    text-align: right;
    padding: 16px;
    border-bottom: 2px solid ${cores.marrom};

    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.4s ease-in, transform 0.4s ease-in;

    &.fade-in {
      opacity: 1;
      transform: translateY(0);
    }

    &.fade-out {
      opacity: 0;
      transform: translateY(10px);
    }

    img {
      height: 100px;
      width: 36%;
      border-radius: 16px;
      object-fit: cover;
    }

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .precos {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 16px;
      margin-bottom: 8px;

      .riscado {
        text-decoration: line-through;
        color: #888;
        font-size: 14px;
      }

      .preco {
        font-size: 14px;
        font-weight: bold;
        color: ${cores.marrom};
      }
    }
    @media (max-width: 748px) {
      flex-direction: column;

      align-items: center;
      text-align: left;

      img {
        width: 100%;
        height: 100px;
        border-radius: 16px;
      }

      .precos {
        text-align: center;
        flex-direction: row;
        gap: 8px;
        margin-top: 8px;
        margin-bottom: 8px;

        .riscado {
          font-size: 14px;
        }

        .preco {
          font-size: 16px;
        }
      }
      .btn-carrinho-wrapper {
        width: 100%;
        margin-top: auto;
      }
    }
  }
`

export const BtnClose = styled.button`
  background-color: #f94e4e;
  border-radius: 4px;
  width: 100%;
  padding: 6px 0px;
  display: block;
  color: ${cores.branca};
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 2px 2px ${cores.preta};
  margin-top: 16px;
`

export const BtnFavoritos = styled.button`
  position: absolute;
  top: 4px;
  right: 0;
  color: #ff6666;
  background-color: transparent;
  font-size: 20px;
  border: none;
  cursor: pointer;
`

export const BtnCarrinho = styled.button<{ isClicked?: boolean }>`
  margin-top: 10px;
  padding: 6px 16px;
  background-color: ${(props) =>
    props.isClicked ? cores.branca : cores.marrom};
  font-weight: bold;
  border: none;
  color: ${(props) => (props.isClicked ? cores.marrom : cores.branca)};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 748px) {
    width: 100%;
  }
`
