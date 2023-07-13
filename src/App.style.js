import styled from 'styled-components'

export const Button = styled.div`
  cursor: pointer;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }

  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`
