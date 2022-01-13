import { useEffect, useState } from 'react';
import BotonSubirFoto from './botonSubirFoto'
import Map from './Map'
import WarningLabel from './warningLabel'
import ImageBox from './imageBox'
import { getAll } from '../api/crud'

const ModalAdopcion = ({onClose}) => {

    const defaultLocation = { lat: -27.30663654561394, lng: -55.88749467693345 } // UNI
    const [location, setLocation] = useState(defaultLocation)
    const [fotosMascotas, setFotosMascotas] = useState([])

    const {data: sexosData, statusCode: statusCodeSexos} = getAll('/api/sexos')
    const {data: especiesData, statusCode: statusCodeEspecies} = getAll('/api/especies')
    const {data: razasData, statusCode: statusCodeRazas} = getAll('/api/razas')
    const {data: estadosData, statusCode: statusCodeEstados} = getAll('/api/estados')

    const [listSexos, setListSexos] = useState([])
    const [listRazas, setListRazas] = useState([])
    const [listEspecies, setListEspecies] = useState([])

    const [sexoActual, setSexoActual] = useState(1)
    const [razaActual, setRazaActual] = useState(1)
    const [especieActual, setEspecieActual] = useState(0)
    const [descripcion, setDescripcion] = useState('')

    useEffect(() => {
        if(especiesData.length && sexosData.length && razasData.length) {
            const perro = especiesData.find(especie => especie.Nombre === 'Perro')
            setListSexos(sexosData)
            setListEspecies(especiesData)
            setEspecieActual(perro.Id)
        }
    }, [statusCodeEspecies, statusCodeSexos, statusCodeRazas])
    
    useEffect(() => {
        Array.isArray(razasData) && setListRazas(
            razasData.filter(raza => raza.EspecieId === parseInt(especieActual))
            .sort((a, b) => { return (a.Nombre > b.Nombre)? 1 : (a.Nombre < b.Nombre)? -1 : 0 })
            )
        }, [especieActual])
        
        const handleSexSelector = (event) => {
            setSexoActual(event.target.value)
        }
        
        const handleRaceSelector = (event) => {
            setRazaActual(event.target.value)
        }
        
        const handleSpeciesSelector = (event) => {
            setEspecieActual(event.target.value)
        }
        
        const handleDescriptionChange = (event) => {
            setDescripcion(event.target.value)
        }
        
        const handleAddMarker = ({ lat, lng }) => {
            setLocation({ lat, lng })
        }
        
        const handleAddImage = e => {
            setFotosMascotas([...fotosMascotas, e.target.files[0].name])
    }
    
    const handleSortImages = index => {
        fotosMascotas[index] && setFotosMascotas([fotosMascotas.splice(index, 1), ...fotosMascotas])
    }
    
    const handleRemoveImage = index => {
        const aux = [...fotosMascotas]
        aux.splice(index, 1)
        setFotosMascotas(aux)
    }
    
    const handleSaveData = () => {
        const reporte = estadosData.find(estado => estado.Nombre === 'Para Adoptar')
        const ficha = {
            Id: 0,
            Edad: 0,
            FechaPublicacion: new Date(),
            Descripcion: descripcion,
            SexoId: parseInt(sexoActual),
            RazaId: parseInt(razaActual),
            UsuarioId: '------',
            EstadoId: reporte.Id
        }
        console.log(ficha)
    }

    return (
        <div className="x-center">
            <div className="bg-fake" style={{position: 'absolute', zIndex: '4'}}></div>
            <div className="x-center w-100 h-100 py-4" style={{position: 'absolute', zIndex: '5'}}>
                <div className="mi-modal">
                    <div className="modal-header">
                        <h5 className="modal-title">Dar en Adopción</h5>
                        <button className="btn-close" aria-label="Close" onClick={() => onClose()} />
                    </div>
                    <div className="mx-2 d-flex">
                        <div className="d-flex flex-column" style={{width:'64%'}}>
                            <div className='d-flex my-2' style={{width:'100%', height:'75%'}}>
                                <div style={{width:'65%', position:'relative'}}>
                                    <ImageBox imagenes={fotosMascotas} sort={handleSortImages} index={0} remove={handleRemoveImage}/>
                                </div>
                                <div style={{width:'35%'}}>
                                    <div className='h-50' style={{position:'relative'}}>
                                        <ImageBox imagenes={fotosMascotas} sort={handleSortImages} index={1} remove={handleRemoveImage}/>
                                    </div>
                                    <div className='h-50' style={{position:'relative'}}>
                                        <ImageBox imagenes={fotosMascotas} sort={handleSortImages} index={2} remove={handleRemoveImage}/>
                                    </div>
                                </div>
                            </div>
                            <BotonSubirFoto deshabilitar={fotosMascotas.length === 3} onAddImage={handleAddImage}/>
                        </div>
                        <div className="mx-1"  style={{width:'35%'}}>
                            <div>
                                <label htmlFor="sexo" className="label">Sexo</label>
                                <select id='sexo' className="form-select miSelector" 
                                    onChange={(e) => handleSexSelector(e)} value={sexoActual}>
                                    {listSexos.map(sexo => 
                                        <option value={sexo.Id} key={sexo.Id}>{sexo.Nombre}</option>)
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="especie" className="label">Especie</label>
                                <select id='especie' className="form-select miSelector" 
                                    onChange={(e) => handleSpeciesSelector(e)} value={especieActual}>
                                    {listEspecies.map(especie => 
                                        <option value={especie.Id} key={especie.Id}>{especie.Nombre}</option>)
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="raza" className="label">Raza</label>
                                <select id='raza' className="form-select miSelector" 
                                    onChange={(e) => handleRaceSelector(e)} value={razaActual}>
                                    {listRazas.map(raza => 
                                        <option value={raza.Id} key={raza.Id}>{raza.Nombre}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <WarningLabel enable={fotosMascotas.length === 3} fontSize='9px' text='El límite es de 3 imágenes'/>
                    <div className='mx-2'>
                        <label htmlFor="descripcion" className="label">Información Adicional</label>
                        <textarea className="form-control" id="descripcion" rows="3" style={{fontSize:'10px'}}
                                  value={descripcion} onChange={(e) => handleDescriptionChange(e)}></textarea>
                    </div>
                    <div className='mx-2 h-100'>
                        <label htmlFor="mapa" className="label">Donde se encuentra? elige un punto en el mapa</label>
                        <Map location={location} zoomLevel={18} addMarker={handleAddMarker} />
                    </div>
                    <div className="modal-footer mt-auto p-2">
                        <button className="btn btn-outline-secondary" onClick={() => onClose()}>
                            Cancelar
                        </button>
                        <button className="btn btn-save" onClick={() => handleSaveData()}>
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
                    width: 100%; 
                    height: 100%;
                }
                .btn-save { 
                    background: #FAAB55;
                    color: white;
                }
                .btn-save:hover {
                    background: #FF8E13;
                }
                .miSelector {
                    font-size: 10px; 
                    height: 30px;
                }
            `}</style>
        </div>
    )
}

export default ModalAdopcion