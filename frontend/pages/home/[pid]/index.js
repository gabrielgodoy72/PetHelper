import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Celular from "../../../components/celular"
import Head from "next/head"
import Cards from '../../../components/cards'
import Menu from '../../../components/menu'
import Previsualizacion from '../../../components/previsualizacion'
import { getAll } from "../../../api/crud"

const Home = () => {
    
    const {data: archivos, loading: loadingA, error: errorA, statusCode: statusCodeA} = getAll('/api/archivos')
    const {data: imagenes, loading: loadingI, error: errorI, statusCode: statusCodeI} = getAll('/api/imagenes/archivo')
    const [prevArchivo, setPrevArchivo] = useState(null)
    const [imgDeArchivo, setImgDeArchivo] = useState(null)
    const [listArchivos, setListArchivos] = useState(null)
    
    const router = useRouter()
    const id = parseInt(router.query.pid)

    useEffect(() => {
        if(archivos.length && imagenes.length) {
            setPrevArchivo(archivos.find(a => { return a.Id === id }))
            setImgDeArchivo(imagenes.filter(i => { return i.FichaId === id }))
            setListArchivos(archivos.filter(a => { return a.Id !== id }))
        }
    }, [archivos, imagenes, id])

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Celular> 
                <div className="font-montserrat">
                    <Menu title={'Inicio'}>
                        {Array.isArray(imgDeArchivo) && imgDeArchivo.length === 1 && 
                            <Previsualizacion archivo={prevArchivo} imagenes={imgDeArchivo}/>
                        }
                        <Cards archivos={listArchivos} imagenes={imagenes}/>
                    </Menu>
                </div>
            </Celular>
        </div>
    )

}

export default Home
