import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const authUser = JSON.parse(localStorage.getItem('user'))
  if (!authUser) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}

export const ProtectedRouteLogout = ({ redirectPath = '/login' }) => {
  localStorage.clear()
  return <Navigate to={redirectPath} replace={true} />
}
