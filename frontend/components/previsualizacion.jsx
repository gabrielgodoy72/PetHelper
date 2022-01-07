import { useRouter } from "next/router"

const Previsualizacion = ({archivo, imagenes}) => {

    const router = useRouter()

    return (
        <div className="bg-three" style={{height: '20rem'}}>
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
        </div>
    )
    
}

export default Previsualizacion