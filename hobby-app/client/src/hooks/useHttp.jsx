import {useCallback, useState} from "react";


export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback( async (url, method, token, body) => {
        setLoading(true)
        try{
            let headers = {}
            if(body){
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json;charset=utf-8'
            }
            if(token)
                headers['Authorization'] = `Bearer ${token}`
            const response = await fetch(`${url}`, {method, body, headers})
            let data = null
            if (method === 'POST' || method === 'GET')
                data = await response.json()

            if(!response.ok)
                throw new Error(data?  data.message:'Something wrong')

            setLoading(false)
            return data
        }catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    },[])

    const clearError = useCallback(() => setError(null),[])

    return {loading, request, error, clearError }
}
