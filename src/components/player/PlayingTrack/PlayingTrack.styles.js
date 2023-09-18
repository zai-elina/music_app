import styled from 'styled-components'

export const TrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`
export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
  @media (max-width: 376px) {
    display: none;
  }
`

export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackPlayAlbum = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
  @media (max-width: 970px) {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`

export const TrackPlayAuthor = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
  @media (max-width: 970px) {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
export const LikeAndDislikeContainer = styled.div`
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
  margin-left: 20px;
  @media (max-width: 800px) {
    margin-left: 0px;
  }
`
export const LikeAndDislike = styled.div`
  padding: 5px;
  ${(props) => (props.$left ? ` margin-left: ${props.$left};` : '')}
  &:hover svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  :active svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const LikeAndDislikeSvg = styled.svg`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: 20px;
  stroke: #696969;
`
