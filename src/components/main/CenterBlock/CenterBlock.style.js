import styled from 'styled-components'

export const Centerblock = styled.div`
  width: auto;
  box-flex: 3;
  flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`
export const CenterBlockTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
export const CenterBlockContent = styled.div`
  display: box;
  display: flexbox;
  display: flex;
  box-orient: vertical;
  direction: normal;
  flex-direction: column;
  flex-direction: column;
`

export const ContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  box-orient: horizontal;
  box-direction: normal;
  flex-direction: row;
  flex-direction: row;
  box-align: center;
  flex-align: center;
  align-items: center;
  box-pack: justify;
  flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const PlaylistTitle = styled.div`
  width: ${(props) => props.$width};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  ${(props) => (props.$textAlign === 'end' ? 'text-align:end;' : '')}
`
export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
