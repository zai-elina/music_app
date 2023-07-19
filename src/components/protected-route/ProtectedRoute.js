import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/login', isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />
  }
  
  return <Outlet />
}

function cookiesDelete() {
  let cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i]
    let eqPos = cookie.indexOf('=')
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;'
    document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }
}

export const ProtectedRouteLogout = ({ redirectPath = '/login' }) => {
  cookiesDelete()
  return <Navigate to={redirectPath} replace={true} />
}
