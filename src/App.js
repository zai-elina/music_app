import { useState, useEffect } from 'react'
import Bar from './components/player/Bar/Bar'
import Main from './components/main/Main/Main'
import Footer from './components/layout/footer/Footer'
import * as S from './App.style'
import GlobalStyle from './App.style'

function App() {
  const [loading, setLoading] = useState(false)

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
        <Main loading={loading} />
        <Bar />
        <Footer />
      </S.App>
    </>
  )
}

export default App
