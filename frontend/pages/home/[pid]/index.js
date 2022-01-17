import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Celular from "../../../components/celular"
import Head from "next/head"
import Cards from '../../../components/cards'
import Menu from '../../../components/menu'
import Previsualizacion from '../../../components/previsualizacion'
import { getAll } from "../../../api/crud"
import Map from '../../../components/Map'
import Link from 'next/link'

const Home = () => {

    const {data: archivos, loading: loadingA, error: errorA, statusCode: statusCodeA} = getAll('/api/archivos')
    const {data: imagenes, loading: loadingI, error: errorI, statusCode: statusCodeI} = getAll('/api/imagenes/archivo')
    const [prevArchivo, setPrevArchivo] = useState(null)
    const [imgDeArchivo, setImgDeArchivo] = useState(null)
    const [listArchivos, setListArchivos] = useState(null)
    const [showAll, setShowAll] = useState(false)

    const defaultLocation = {
        lat: -27.30663654561394,
        lng: -55.88749467693345,
    } // UNI

    const [location, setLocation] = useState(defaultLocation)

    const handleAddMarker = ({ lat, lng }) => {
        setLocation({ lat, lng })
        console.log(lat, lng)
    }

    const router = useRouter()
    const id = parseInt(router.query.pid)

    const handleShowAll = () => {
        setShowAll(!showAll)
    }

    useEffect(() => {
        if(archivos.length && imagenes.length) {
            setPrevArchivo(archivos.find(a => { return a.Id === id }))
            setImgDeArchivo(imagenes.filter(i => { return i.FichaId === id }))
            setListArchivos(archivos.filter(a => { return (a.Id !== id) && (a.Estado.Nombre === 'Para Adoptar') }).reverse())
        }
    }, [archivos, imagenes, id])

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Celular>
                <div className="font-montserrat">
                    <Menu title={'Inicio'} onShowAll={handleShowAll} showAll={showAll}>
                    {/* Previsualizacion de la card */}
                        {Array.isArray(imgDeArchivo) && imgDeArchivo.length === 1 &&
                            <Previsualizacion archivo={prevArchivo} imagenes={imgDeArchivo} onShowAll={handleShowAll} showAll={showAll}/>
                        }
                    {/* Informacion Completa de la Card */}
                        {showAll && <div style={{height: '25rem'}} >
                            {/* Requisitos del dueño */}
                            <div className='p-1'>
                                <p className='info'><b>Requisitos que solicita el dueño</b></p>
                                <p className='info mx-2'>
                                    {prevArchivo.Descripcion? prevArchivo.Descripcion: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                                </p>
                            </div>
                            {/* Mapa */}
                            <div className='px-2'>
                                <Map location={location} zoomLevel={18} addMarker={handleAddMarker} />
                            </div>
                            {/* Boton que redirige al perfil del usuario que creó la card */}
                            <Link href={`/perfil/${prevArchivo.Usuario.Id}`}>
                                <div className='bg-three btn-user d-flex justify-content-between pointer'>
                                    <div className='d-flex'>
                                        <img src="/user.svg" alt="user icon" width={'25px'}/>
                                        <span style={{fontSize: '14px'}} className='mx-2'>
                                            {prevArchivo.Usuario.Nombre}
                                        </span>
                                    </div>
                                    <img src="/chevron-right.svg" alt="chevron icon" width={'15px'}/>
                                </div>
                            </Link>
                        </div>}
                    {/* Card de mascotas para Adoptar */}
                        {!showAll && 
                            <div className='overflow-auto' style={{height:'25rem'}}>
                                <Cards archivos={listArchivos} imagenes={imagenes}/>
                            </div>
                        }
                    </Menu>
                </div>
            </Celular>
            <style jsx>{`
                .btn-user {
                    position: absolute;
                    bottom: 0px;
                    width: 100%;
                    padding: 15px 25px;
                    border-top: 2px solid black;
                    color: white;
                }
                .mi-scroll::-webkit-scrollbar {
                    display: none;
                    overflow-y: scroll;
                }
            `}</style>
        </div>
    )

}

export default Home
