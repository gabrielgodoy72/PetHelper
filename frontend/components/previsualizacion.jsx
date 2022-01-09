import { useRouter } from "next/router"

const Previsualizacion = ({archivo, imagenes}) => {

    const router = useRouter()

    return (
        <div className="bg-one border-bottom border-white mb-2" style={{height: '20rem'}}>
            <div style={{position: 'absolute', zIndex: '2', right: '5px'}} className="my-2 mx-2" onClick={() => {router.push('/home')}}>
                <img alt="exit icon" src="/salir.svg" />
            </div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div>
                        <img src={`/${imagenes[0].Nombre}.png`} 
                             className="d-block w-100" 
                             alt="imagen de mascota" />
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div className="ms-2 pt-1" style={{width: '8rem'}}>
                    <p className="info"><b>Nombre: </b>---</p>
                    <p className="info"><strong>Edad: </strong>{archivo.Edad}</p>
                    <p className="info"><strong>Sexo: </strong>{archivo.Sexo.Nombre}</p>
                </div>
                <div className="pt-1" style={{width: '8rem'}}>
                    <p className="info"><strong>Raza: </strong>{archivo.Raza.Nombre}</p>
                    <p className="info"><strong>Lugar: </strong>---</p>
                </div>
                <div className="px-2 pt-1" style={{width: '7rem'}}>
                    <div className="boton d-flex justify-content-around">
                        Adoptar <img alt="whatsapp icon" src="/whatsapp.svg" />
                    </div>
                    <div className="boton d-flex justify-content-around">
                        Mas Info <img alt="info icon" src="/info.svg" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .info {
                    margin-bottom: 3px;
                    color: white;
                    font-size: 10px;
                }
                .boton {
                    cursor: pointer;
                    margin-bottom: 5px;
                    border-radius: 5px;
                    padding: 1px 5px; 
                    border: 1px solid black;
                    font-size: 10px;
                    font-weight: 900;
                    background: #FEC260;
                }
            `}</style>
        </div>
    )
    
}

export default Previsualizacion