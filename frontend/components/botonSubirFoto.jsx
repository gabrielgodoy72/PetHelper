import Tippy from '@tippyjs/react'
import 'tippy.js/themes/light.css'

const BotonSubirFoto = ({deshabilitar, onAddImage}) => {

    const bg = deshabilitar? 'bg-five' : 'bg-three'

    return (
        <>
            <label className={`d-flex justify-content-between mt-auto p-0 pointer ${bg}`} style={{borderRadius:'4px'}} htmlFor="images">
                <div className="p-1">
                    <p className="text-white m-0" style={{fontSize:'9px'}}>Subir</p>
                    <p className="text-white m-0" style={{fontSize:'14px'}}>Foto</p>
                </div>
                <div>
                    <img width="55px" height="40px" alt="img icon" src="/img.svg" className="px-0" />
                </div>
            </label>
            {!deshabilitar && <input type="file" id="images" onChange={(e) => onAddImage(e)} style={{display:'none'}}/>}
        </>
    )
}

export default BotonSubirFoto