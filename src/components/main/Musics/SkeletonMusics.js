import Skeleton from 'react-loading-skeleton'

const SkeletonMusic = () => {
  const count = 6
  return (
    <>
      {Array(count)
        .fill()
        .map((item) => (
          <div className="playlist__item" key="music">
            <div className="playlist__track track">
              <div className="track__title skeleton__title" style={{width:"auto"}}>
                <div
                  className="react-loading-skeleton track__title-image"
                  style={{
                    width: '51px',
                    height: '51px',
                    backgroundColor: 'rgba(49, 49, 49, 1)',
                  }}
                >
                  <Skeleton />
                </div>
                <div
                  className="react-loading-skeleton"
                  style={{
                    width: '356px',
                    height: '19px',
                    backgroundColor: 'rgba(49, 49, 49, 1)'
                  }}
                >
                  <Skeleton />
                </div>
              </div>
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
            </div>
          </div>
        ))}
    </>
  )
}
export default SkeletonMusic
