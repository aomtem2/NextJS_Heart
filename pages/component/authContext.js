import { useState, useEffect } from "react";
import { createContext } from "react";
import { useRouter } from 'next/router'

const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
    authReady: false
})

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter()
    const noSide = ["/login", "/setPin"]

    useEffect(() => {


    }, [])

    const login = (token) => {
        setUser(token)
        user ? console.log(user) : ''
    }

    const logout = () => {
        setUser(null)
        console.log(user)
    }

    const context = { user, login, logout }

    // if (context.user == null && !noSide.includes(router.pathname)) {
    //     return { redirect: { destination: '/login', permanent: false } }
    // }



    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext