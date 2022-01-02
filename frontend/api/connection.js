import axios from "axios"

const Connection = axios.create({ baseURL: "http://localhost:3001" })
Connection.defaults.headers.post['Content-Type'] = 'application/json'

export default Connection