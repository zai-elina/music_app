import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/not-found/NotFound'
import Favorites from './pages/favorites/Favorites'
import Category from './pages/category/Category'
import CenterBlock from './components/tracks/CenterBlock/CenterBlock'
import {
  ProtectedRoute,
  ProtectedRouteLogout,
} from './components/protected-route/ProtectedRoute'
import AuthPage from './pages/auth/AuthPage'
import { UserProvider } from './contexts/User'
import PageLayout from './pages/pagelayout/PageLayout'
import PageMyTracks from './pages/my-tracks/PageMyTracks'
import { useState } from 'react'

export const AppRoutes = ({
  loading,
  musicItems,
  isOpenPlayer,
  setIsOpenPlayer,
  currentTrack,
  setCurrentTrack,
}) => {
  const [isAnimatePlayTrack, setIsAnimatePlayTrack] = useState(true)
  
  return (
    <UserProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <PageLayout
                loading={loading}
                isOpenPlayer={isOpenPlayer}
                currentTrack={currentTrack}
                setCurrentTrack={setCurrentTrack}
                setIsAnimatePlayTrack={setIsAnimatePlayTrack}
              />
            }
          >
            <Route
              path="/"
              element={
                <CenterBlock
                  loading={loading}
                  musicItems={musicItems}
                  setIsOpenPlayer={setIsOpenPlayer}
                  setCurrentTrack={setCurrentTrack}
                  isAnimatePlayTrack={isAnimatePlayTrack}
                />
              }
            />
            <Route
              path="/favorite"
              element={
                <PageMyTracks
                  loading={loading}
                  setIsOpenPlayer={setIsOpenPlayer}
                  setCurrentTrack={setCurrentTrack}
                  isAnimatePlayTrack={isAnimatePlayTrack}
                />
              }
            />

            <Route path="/category/:id" element={<Category />} />
          </Route>
        </Route>

        <Route path="/login" element={<AuthPage isLoginMode={true}/>} />
        <Route path="/register" element={<AuthPage isLoginMode={false} />} />
        <Route path="/logout" element={<ProtectedRouteLogout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  )
}
