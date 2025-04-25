import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.branca};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  color: ${cores.marrom};

  a {
    color: ${cores.marrom};
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 100px;
  }

  h1 {
    font-family: 'Rochester', cursive;
    margin-left: 30px;
    font-weight: normal;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;

  i {
    margin-left: 8px;
    font-weight: bold;
    font-size: 20px;
  }
`
