import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.branca};
  color: ${cores.marrom};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  box-shadow: 0 0.1px 6px ${cores.preta};

  a {
    color: ${cores.marrom};
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    width: 70px;
  }

  @media (max-width: 748px) {
    padding: 0 12px;
    padding-top: 12px;

    img {
      width: 60px;
    }

    h1 {
      margin-left: 12px;
      font-size: 24px;
    }
  }
`

export const ContainerHeader = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 12px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 748px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 748px) {
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid ${cores.marrom};
    padding-bottom: 12px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  list-style: none;
  padding: 0;

  @media (max-width: 748px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0;
    justify-items: center;
    width: 100%;
    padding: 0 8px;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    gap: 8px;
  }

  &.ativo {
    max-height: 300px;
    opacity: 1;
    visibility: visible;
    margin-top: 8px;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  position: relative;
  cursor: pointer;

  i {
    margin-left: 8px;
    font-weight: bold;
    font-size: 20px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 16px;

    &:hover {
      background-color: ${cores.marrom};
      color: ${cores.branca};
    }

    @media (max-width: 748px) {
      font-size: 12px;
      margin: 0;

      i {
        margin-left: 8px;
        font-weight: bold;
      }
    }
  }

  span {
    position: absolute;
    border: 2px solid;
    right: -6px;
    top: -6px;
    background-color: ${cores.marrom};
    color: ${cores.branca};
    border-radius: 50%;
    padding: 4px 6px;
    font-size: 10px;
  }
`

export const LinkPage = styled(Link)`
  color: ${cores.marrom};
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  transition: transform 0.3s ease-in-out;
`

export const Hamburguer = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;

  i {
    font-size: 28px;
    color: ${cores.marrom};
  }

  @media (max-width: 748px) {
    display: block;
  }
`
export const LinkTitulo = styled(Link)`
  h1 {
    font-family: 'Rochester', cursive;
    margin-left: 30px;
    font-weight: normal;
    font-size: 28px;
    line-height: 1;
  }
`
