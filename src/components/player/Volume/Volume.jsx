import * as S from './Volume.styles'

export function Volume({ volume, setVolume }) {
  return (
    <S.VolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg>
            <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            volume={volume}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.VolumeBlock>
  )
}
