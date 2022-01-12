import { useState } from 'react';
import BotonSubirFoto from './botonSubirFoto'
import Map from './Map'
import WarningLabel from './warningLabel'
import ImageBox from './imageBox'

const ModalReporte = ({onClose}) => {

    const defaultLocation = { lat: -27.30663654561394, lng: -55.88749467693345 } // UNI
    
    const [location, setLocation] = useState(defaultLocation)
    const [imagenes, setImagenes] = useState([])
    
    const handleAddMarker = ({ lat, lng }) => {
        setLocation({ lat, lng })
    }

    const addImage = e => {
        setImagenes([...imagenes, e.target.files[0].name])
    }

    const sortImages = index => {
        imagenes[index] && setImagenes([imagenes.splice(index, 1), ...imagenes])
    }

    const removeImage = index => {
        const aux = [...imagenes]
        aux.splice(index, 1)
        setImagenes(aux)
    }

    console.log(imagenes)
    return (
        <div className="x-center">
            <div className="bg-fake w-100 h-100" style={{position: 'absolute', zIndex: '4'}}>
            </div>
            <div className="x-center w-100 h-100 py-4" style={{position: 'absolute', zIndex: '5'}}>
                <div className="mi-modal">
                    <div className="modal-header">
                        <h5 className="modal-title">Reportar</h5>
                        <button className="btn-close" aria-label="Close" onClick={() => onClose()} />
                    </div>
                    <div className="mx-2 d-flex">
                        <div className="d-flex flex-column" style={{width:'58%'}}>
                            <div className='d-flex my-2' style={{width:'100%', height:'75%'}}>
                                <div style={{width:'65%', position:'relative'}}>
                                    <ImageBox imagenes={imagenes} sort={sortImages} index={0} remove={removeImage}/>
                                </div>
                                <div style={{width:'35%'}}>
                                    <div className='h-50' style={{position:'relative'}}>
                                        <ImageBox imagenes={imagenes} sort={sortImages} index={1} remove={removeImage}/>
                                    </div>
                                    <div className='h-50' style={{position:'relative'}}>
                                        <ImageBox imagenes={imagenes} sort={sortImages} index={2} remove={removeImage}/>
                                    </div>
                                </div>
                            </div>
                            <BotonSubirFoto deshabilitar={imagenes.length === 3} onAddImage={addImage}/>
                        </div>
                        <div className="mx-1"  style={{width:'42%'}}>
                            <div>
                                <label htmlFor="sexo" className="label">Sexo</label>
                                <select id='sexo' className="form-select" style={{fontSize:'10px', height:'30px'}}>
                                    <option defaultValue>No sabe</option>
                                    <option value="1">Macho</option>
                                    <option value="2">Hembra</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="especie" className="label">Especie</label>
                                <select id='especie' className="form-select" style={{fontSize:'10px', height:'30px'}}>
                                    <option defaultValue>Gato</option>
                                    <option value="1">Perro</option>
                                    <option value="2">Conejo</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="raza" className="label">Raza</label>
                                <select id='raza' className="form-select" style={{fontSize:'10px', height:'30px'}}>
                                    <option defaultValue>Mestizo</option>
                                    <option value="1">Siames</option>
                                    <option value="2">Pug</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <WarningLabel enable={imagenes.length === 3} fontSize='9px' text='El límite es de 3 imágenes'/>
                    <div className='mx-2'>
                        <label htmlFor="descripcion" className="label">Información Adicional</label>
                        <textarea className="form-control" id="descripcion" rows="3" style={{fontSize:'10px'}}></textarea>
                    </div>
                    <div className='mx-2 h-100'>
                        <label htmlFor="mapa" className="label">Donde se encuentra? elige un punto en el mapa</label>
                        <Map location={location} zoomLevel={18} addMarker={handleAddMarker} />
                    </div>
                    <div className="modal-footer mt-auto p-2">
                        <button className="btn btn-outline-secondary" onClick={() => onClose()}>
                            Cancelar
                        </button>
                        <button className="btn btn-save" onClick={() => onClose()}>
                            Guardar
                        </button>
                    </div>
                </div> 
            </div>
            <style jsx>{`
                .bg-fake {
                    background: white;
                    opacity: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .btn-save { 
                    background: #FAAB55;
                    color: white;
                }
                
                .btn-save:hover {
                    background: #FF8E13;
                }
            `}</style>
        </div>
    )
}

export default ModalReporte