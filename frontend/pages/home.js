import Container from "../components/container"
import Head from "next/head"
import Cards from '../components/cards'
import { getAll } from "../api/crud"

const Home = () => {

    const {data: archivos, loading: loadingA, error: errorA, statusCode: statusCodeA} = getAll('/api/archivos')
    const {data: imagenes, loading: loadingI, error: errorI, statusCode: statusCodeI} = getAll('/api/imagenes/archivo')
    
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Container>
                <Cards archivos={archivos} imagenes={imagenes}/>
            </Container>
        </div>
    )

}

export default Home
