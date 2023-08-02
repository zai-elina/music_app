import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/login', isAuth }) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace={true} />
  }
  
  return <Outlet />
}

export const ProtectedRouteLogout = ({ redirectPath = '/login' }) => {
  localStorage.clear()
  return <Navigate to={redirectPath} replace={true} />
}
