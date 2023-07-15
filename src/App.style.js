import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local('StratosSkyeng'), local('StratosSkyeng'),
    url('/fonts/Stratos-Regular.woff2') format('woff2'),
    url('/fonts/Stratos-Regular.woff');
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
}`

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
export const App = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`

export default GlobalStyle
