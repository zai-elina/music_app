import styled from 'styled-components'

export const Player = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
  column-gap: 33px;
  @media (max-width: 800px) {
    column-gap: 10px;
  }
`
export const PlayerButton = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  c
  margin-right: ${(props) => {
    props.$value
  }};
  ${(props) => {
    props.$fill ? `fill:${props.$fill}` : ''
  }}
`
export const PlayerButtonRepeat = styled(PlayerButton)`
  margin-right: 24px;
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &.active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const PlayerButtonShuffle = styled(PlayerButton)`
  margin-right: 0;
  margin-left: -30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &.active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const PlayerButtonSvg = styled.svg`
  cursor: pointer;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  ${(props) => (props.$fill ? `fill:${props.$fill};` : '')}
  ${(props) => (props.$stoke ? `stoke:${props.$stoke};` : '')}
`
