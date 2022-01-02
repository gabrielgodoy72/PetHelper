import { useState } from "react"
import connection from "../connection"

export const post = (path) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [statusCode, setStatusCode] = useState(0)

    const fetchData = async (element) => {
        setLoading(true)
        setStatusCode(0) //para que no quede status residual de una posible llamada anterior
        try {//obs: sin validateStatus, cuando lanza 404 o 400 pasa al catch y no setea el statusCode y me retornará status 0
            const { data: response, status } = await connection.post(path, element, { validateStatus: false })
            setData(response)
            setStatusCode(status)
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    return {data, loading, error, statusCode, fetchData }
}