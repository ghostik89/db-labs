import {useState, useCallback, useEffect} from 'react'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const storageName = 'usersData'

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({
            userId:id , token: jwtToken
        }))
    },[token, userId])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if(data && data.token)
            login(data.token, data.userId)
    }, [login])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    },[])

    return {login, logout, token, userId}
}