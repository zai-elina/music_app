import styled from 'styled-components'

export const VolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
  @media (max-width: 426px) {
    padding: 10px;
    margin: 0 auto;
  }
`

export const VolumeContent = styled.div`
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
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const VolumeProgress = styled.div`
  width: ${(props) => props.$width};
  margin-top: -8px;
`

export const VolumeProgressLine = styled.input`
  -webkit-appearance: none;
  background: linear-gradient(
    to right,
    #fff ${(props) => `${props.volume}%, #797979 ${props.volume}%`}
  );
  &::-webkit-slider-runnable-track {
    height: 2px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -6px;
    background: black;
    border: 2px solid #ffffff;
    border-radius: 50%;
    height: 12px;
    width: 12px;
  }

  &::-moz-range-track {
    height: 2px;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -6px;
    background: black;
    border: 2px solid #ffffff;
    border-radius: 50%;
    height: 12px;
    width: 12px;
  }
`
