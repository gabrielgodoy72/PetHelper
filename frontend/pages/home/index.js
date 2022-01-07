import Celular from "../../components/celular"
import Head from "next/head"
import Cards from '../../components/cards'
import Menu from '../../components/menu'
import { getAll } from "../../api/crud"

const Home = () => {

    const {data: archivos, loading: loadingA, error: errorA, statusCode: statusCodeA} = getAll('/api/archivos')
    const {data: imagenes, loading: loadingI, error: errorI, statusCode: statusCodeI} = getAll('/api/imagenes/archivo')
    
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Celular> 
                <div className="font-montserrat">
                    <Menu title={'Inicio'}>
                        <Cards archivos={archivos} imagenes={imagenes}/>
                    </Menu>
                </div>
            </Celular>
        </div>
    )

}

export default Home
