import Celular from "../../components/celular"
import Head from "next/head"
import Cards from '../../components/cards'
import Menu from '../../components/menu'
import { getAll } from "../../api/crud"
import { useEffect, useState } from "react"
import useApplicationContext from "../../hooks/useApplicationContext"
import { useRouter } from "next/router"

const Home = () => {

    const { user } = useApplicationContext();
    const router = useRouter();

    const {data: archivos, loading: loadingA, error: errorA, statusCode: statusCodeA} = getAll('/api/archivos')
    const {data: imagenes, loading: loadingI, error: errorI, statusCode: statusCodeI} = getAll('/api/imagenes/archivo')
    const [listArchivos, setListArchivos] = useState([])
    const [listImagenes, setListImagenes] = useState([])

    useEffect(() => {
        if(archivos.length && imagenes.length) {
            setListArchivos(archivos.reverse())
            setListImagenes(imagenes)
        }
    }, [archivos, imagenes])

    useEffect(() => {
        if (user === null) router.push("/");
    }, []);

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Celular> 
                <div className="font-montserrat">
                    <Menu title={'Inicio'}>
                        <div className='overflow-auto' style={{height:'45rem'}}>
                            <Cards archivos={listArchivos} imagenes={listImagenes}/>
                        </div>
                    </Menu>
                </div>
            </Celular>
        </div>
    )

}

export default Home
