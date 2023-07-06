import Skeleton from 'react-loading-skeleton'

const SkeletonPlaylists = () => {
  const count = 3
  return (
    <>
      {Array(count)
        .fill()
        .map((item) => (
          <div className="sidebar__item" key="playlist">
            <a className="sidebar__link">
              <div
                className="react-loading-skeleton sidebar__img"
                style={{
                  width: '250px',
                  height: '150px',
                  backgroundColor: 'rgba(49, 49, 49, 1)',
                }}
                alt="Loading"
              >
                <Skeleton />
              </div>
            </a>
          </div>
        ))}
    </>
  )
}
export default SkeletonPlaylists
