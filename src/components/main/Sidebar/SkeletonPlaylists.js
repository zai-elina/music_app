import Skeleton from 'react-loading-skeleton'
import * as S from './Sidebar.style'

const SkeletonPlaylists = () => {
  const count = 3
  return (
    <>
      {Array(count)
        .fill()
        .map((item,index) => (
          <S.PlaylistsItem key={index}>
            <S.PlaylistsItemLink>
              <div
                className="react-loading-skeleton"
                style={{
                  width: '250px',
                  height: '150px',
                  backgroundColor: 'rgba(49, 49, 49, 1)',
                }}
                alt="Loading"
              >
                <Skeleton />
              </div>
            </S.PlaylistsItemLink>
          </S.PlaylistsItem>
        ))}
    </>
  )
}
export default SkeletonPlaylists
