import { useEffect, useState } from "react"
import connection from "../connection"

export const getAll = (path) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [statusCode, setStatusCode] = useState(0)

    const fetch = async () => {
        try {
            const { data: response, status } = await connection.get(path)
            setData(response)
            setStatusCode(status)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        
        fetch()
    }, [])

    return {data, loading, error, statusCode, fetch }
}