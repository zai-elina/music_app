import { Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main'
import NotFound from './pages/not-found/NotFound'
import Favorites from './pages/favorites/Favorites'
import Category from './pages/category/Category'
import Login from './pages/login/Login'
import {
  ProtectedRoute,
  ProtectedRouteLogout,
} from './components/protected-route/ProtectedRoute'
import Register from './pages/register/Register'

export const AppRoutes = ({ loading, token }) => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAuth={Boolean(token)} />}>
        <Route path="/" element={<Main loading={loading} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<ProtectedRouteLogout />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
