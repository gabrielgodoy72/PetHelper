import { useEffect, useState } from "react"
import connection from "../connection"
//obs: todavia no probe si funciona
export const putById = (path, id) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [statusCode, setStatusCode] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response, status } = await connection.get(path)
                setData(response)
                setStatusCode(status)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    return {data, loading, error, statusCode }
}