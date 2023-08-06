import { Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main'
import NotFound from './pages/not-found/NotFound'
import Favorites from './pages/favorites/Favorites'
import Category from './pages/category/Category'
import {
  ProtectedRoute,
  ProtectedRouteLogout,
} from './components/protected-route/ProtectedRoute'
import AuthPage from './pages/auth/AuthPage'
import { UserProvider } from './contexts/User'


export const AppRoutes = ({
  loading,
  musicItems,
  isOpenPlayer,
  setIsOpenPlayer,
  currentTrack,
  setCurrentTrack,
}) => {
  return (
    <UserProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/"
              element={
                <Main
                  loading={loading}
                  musicItems={musicItems}
                  isOpenPlayer={isOpenPlayer}
                  setIsOpenPlayer={setIsOpenPlayer}
                  currentTrack={currentTrack}
                  setCurrentTrack={setCurrentTrack}
                />
              }
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/category/:id" element={<Category />} />
          </Route>

          <Route path="/login" element={<AuthPage isLoginMode={true} />} />
          <Route path="/register" element={<AuthPage isLoginMode={false} />} />
          <Route path="/logout" element={<ProtectedRouteLogout />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
    </UserProvider>
  )
}
