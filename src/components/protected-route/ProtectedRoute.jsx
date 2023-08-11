import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../contexts/User'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const { authUser } = useContext(UserContext)
  if (!authUser) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}

export const ProtectedRouteLogout = ({ redirectPath = '/login' }) => {
  const { setAuthUser } = useContext(UserContext)
  setAuthUser(null)
  return <Navigate to={redirectPath} replace={true} />
}
