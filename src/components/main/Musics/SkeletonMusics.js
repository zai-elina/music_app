import Skeleton from 'react-loading-skeleton'
import * as S from './Musics.style'

const SkeletonMusic = () => {
  const count = 6
  return (
    <>
      {Array(count)
        .fill()
        .map((item,index) => (
          <S.Music key={index}>
            <S.Track>
              <S.TrackTitle
                style={{ width: 'auto' }}
              >
                <S.TrackTitleImage
                  className="react-loading-skeleton"
                  style={{
                    width: '51px',
                    height: '51px',
                    backgroundColor: 'rgba(49, 49, 49, 1)',
                  }}
                >
                  <Skeleton />
                </S.TrackTitleImage>
                <div
                  className="react-loading-skeleton"
                  style={{
                    width: '356px',
                    height: '19px',
                    backgroundColor: 'rgba(49, 49, 49, 1)',
                  }}
                >
                  <Skeleton />
                </div>
              </S.TrackTitle>
              <div
                className="react-loading-skeleton"
                style={{
                  width: '301px',
                  height: '19px',
                  backgroundColor: 'rgba(49, 49, 49, 1)',
                }}
              >
                <Skeleton />
              </div>
              <div
                className="react-loading-skeleton"
                style={{
                  width: '325px',
                  height: '19px',
                  backgroundColor: 'rgba(49, 49, 49, 1)',
                }}
              >
                <Skeleton />
              </div>
            </S.Track>
          </S.Music>
        ))}
    </>
  )
}
export default SkeletonMusic
