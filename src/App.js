import { useState, useEffect } from 'react'
import * as S from './App.style'
import GlobalStyle from './App.style'
import { AppRoutes } from './routes'

function App() {
  const [loading, setLoading] = useState(false)
  const token = document.cookie.indexOf('token')

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <GlobalStyle />
      <S.App>
        <AppRoutes loading={loading} token={token} />
      </S.App>
    </>
  )
}

export default App
