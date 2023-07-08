import { useState, useEffect } from 'react'
import Bar from './components/player/Bar/Bar'
import Main from './components/main/Main/Main'
import Footer from './components/layout/footer/Footer'

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
    <div className="App container">
      <Main loading={loading} />
      <Bar />
      <Footer />
    </div>
  )
}

export default App
