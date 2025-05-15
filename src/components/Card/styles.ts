import styled from 'styled-components'
import { cores } from '../../styles'

export const ItemCard = styled.div`
  position: relative;
  background-color: rgba(106, 78, 59, 0.14);
  border-radius: 16px;
  box-shadow: 4px 4px 8px ${cores.marrom};
  width: 250px;
  flex-shrink: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-16px);
    box-shadow: 8px 8px 16px ${cores.marrom};
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
  }

  div {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
  }

  p {
    margin-bottom: 16px;
    font-size: 14px;
    flex-grow: 1;
    text-align: start;
  }

  h3 {
    margin-bottom: 10px;
  }

  .icone-favorito {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 24px;
    color: #ff6666;
    background-color: ${cores.marrom_claro};
    border-radius: 50%;
    padding: 6px 8px 2px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  .icone-favorito:hover {
    transform: scale(1.2);
  }

  @media (max-width: 748px) {
    width: 200px;
    height: 416px;

    img {
      height: 120px;
    }

    p {
      font-size: 13px;
    }

    h3 {
      font-size: 16px;
    }
  }
`

export const Preco = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: block;
  margin-bottom: 8px;
`

interface BtnComprarProps {
  $isClicked: boolean
}

export const BtnComprar = styled.button.attrs<BtnComprarProps>(
  () => ({})
)<BtnComprarProps>`
  margin-top: auto;
  width: 100%;
  padding: 8px;
  border: none;
  background-color: ${cores.marrom};
  color: ${cores.branca};
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  box-shadow: 4px 4px 6px ${cores.preta};
  cursor: pointer;
  margin-bottom: 16px;

  transition: background-color 0.3s ease, transform 0.1s ease;

  &:active {
    transform: scale(0.98);
  }

  ${(props) =>
    props.$isClicked
      ? `
      background-color: ${cores.branca};
      color: ${cores.marrom};
    `
      : `
      background-color: ${cores.marrom};
      color: ${cores.branca};
    `}
`
