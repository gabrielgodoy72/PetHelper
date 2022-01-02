import Container from "../components/container"
import Head from "next/head"
import Cards from '../components/cards'
import { getAll } from "../api/crud"

const Home = () => {

    const {data: archivos, loading, error, statusCode} = getAll('/api/archivos')
    
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Container>
                <Cards archivos={archivos} />
            </Container>
        </div>
    )

}

export default Home
