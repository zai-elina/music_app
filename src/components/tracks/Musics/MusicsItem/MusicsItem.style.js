import styled from 'styled-components'

export const Music = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const Track = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media (max-width: 1100px) {
    width: 98%;
    justify-content: space-around;
  }
  @media (max-width: 426px) {
    justify-content: space-between;
    width: 90%;
  }
`
export const TrackTitle = styled.div`
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
  width: 447px;
  @media (max-width: 1100px) {
    width: 30vw;
  }
`
export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`
export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackSubtitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const TrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  @media (max-width: 1100px) {
    width: 30vw;
  }
`
export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`
export const TrackAlbum = styled.div`
  width: 245px;
  @media (max-width: 1100px) {
    width: 30vw;
  }
  @media (max-width: 970px) {
    height: 50px;
    width: 15vw;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  @media (max-width: 426px) {
    display: none;
  }
`
export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`

export const TrackLike = styled(TrackTimeSvg)`
  cursor: pointer;
`

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
  @media (max-width: 1100px) {
    width: 5vw;
  }
`
const animation = `
animation: pulse 2s ease-in 0s infinite normal forwards;
@keyframes pulse {
  0% {
    animation-timing-function: ease-out;
    transform: scale(1);
    transform-origin: center center;
  }

  10% {
    animation-timing-function: ease-in;
    transform: scale(0.7);
  }

  17% {
    animation-timing-function: ease-out;
    transform: scale(0.8);
  }

  33% {
    animation-timing-function: ease-in;
    transform: scale(0.7);
  }

  45% {
    animation-timing-function: ease-out;
    transform: scale(1);
  }
}
`
export const Circle = styled.circle`
  fill: #ad61ff;
  ${(props) => (props.$isAnimate === true ? animation : '')}
`
export const Title = styled.div`
  @media (max-width: 970px) {
    height: 50px;
    width: 15vw;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
