import React, {useState, useEffect, useContext} from 'react'
const authContextContext = React.createContext()
export function useAuth()
{
    return useContext(authContextContext)
}
export function AuthProvider (props)
{
    const [authUser, setAuthUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn

    }
    return (
        <authContextContext.Provider value={value}>{props.children}</authContextContext.Provider>
    )


}