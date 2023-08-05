import React from 'react'
import { useState } from 'react'

export const UserContext = React.createContext()

export function UserProvider({ children }) {
  const [authUser, setAuthUser] = useState(null)

  return (
    <UserContext.Provider
      value={{
        authUser,
        setAuthUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
