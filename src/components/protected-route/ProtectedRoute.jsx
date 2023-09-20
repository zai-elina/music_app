import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const authUser = JSON.parse(sessionStorage.getItem('user'))
  if (!authUser) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}

export const ProtectedRouteLogout = ({ redirectPath = '/login' }) => {
  sessionStorage.clear()
  return <Navigate to={redirectPath} replace={true} />
}
