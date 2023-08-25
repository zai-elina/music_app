import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/not-found/NotFound'
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
import Catalog from './pages/catalog/Catalog'

export const AppRoutes = ({
  isOpenPlayer,
  setIsOpenPlayer,
  currentTrack,
  setCurrentTrack,
}) => {
  const [isAnimatePlayTrack, setIsAnimatePlayTrack] = useState(isOpenPlayer)
  const [isUserLikeInBar, setIsUserLikeInBar] = useState(false)

  return (
    <UserProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <PageLayout
                isOpenPlayer={isOpenPlayer}
                currentTrack={currentTrack}
                setCurrentTrack={setCurrentTrack}
                setIsAnimatePlayTrack={setIsAnimatePlayTrack}
                setIsUserLikeInBar={setIsUserLikeInBar}
              />
            }
          >
            <Route
              path="/"
              element={
                <CenterBlock
                  setIsOpenPlayer={setIsOpenPlayer}
                  setCurrentTrack={setCurrentTrack}
                  isAnimatePlayTrack={isAnimatePlayTrack}
                  isUserLikeInBar={isUserLikeInBar}
                />
              }
            />
            <Route
              path="/favorite"
              element={
                <PageMyTracks
                  setIsOpenPlayer={setIsOpenPlayer}
                  setCurrentTrack={setCurrentTrack}
                  isAnimatePlayTrack={isAnimatePlayTrack}
                  isUserLikeInBar={isUserLikeInBar}
                />
              }
            />

            <Route
              path="/catalog/selection/:id"
              element={
                <Catalog
                  setIsOpenPlayer={setIsOpenPlayer}
                  setCurrentTrack={setCurrentTrack}
                  isAnimatePlayTrack={isAnimatePlayTrack}
                  isUserLikeInBar={isUserLikeInBar}
                />
              }
            />
          </Route>
        </Route>

        <Route path="/login" element={<AuthPage isLoginMode={true} />} />
        <Route path="/register" element={<AuthPage isLoginMode={false} />} />
        <Route path="/logout" element={<ProtectedRouteLogout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  )
}
