import { useState } from "react"
import MenuItem from "./menu_item"

const Menu = ({title, children}) => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            {/* NavBar */}
            <div className="d-flex justify-content-between border-bottom border-white px-3 py-2">
                <div className="d-flex align-items-center">
                    <img src="/hamburguer_menu.svg" alt="menu icon" onClick={() => setShowMenu(!showMenu)} className="pointer"/>
                    <h4 className="text-white my-0 mx-2">{title}</h4>
                </div>
                <img src="/search_icon.svg" alt="menu icon" />
            </div>
            {/* Menu que se despliega */}
            {showMenu && <div className="d-flex" style={{height: '750px'}}>
                <div className="flex-grow-1 bg-one p-2" style={{ position: 'relative', zIndex: '2' }}>
                    <MenuItem imagen='user' texto='Mi Perfil'/>
                    <MenuItem imagen='reportado' texto='Reportar'/>
                    <MenuItem imagen='para_adoptar' texto='Dar en Adopción'/>
                    <MenuItem imagen='aportes_ayudas' texto='Aportes y Ayudas'/>
                    <MenuItem imagen='cerrar_sesion' texto='Cerrar Sesión'/>
                </div>
                <div className="bg-secondary opacity-50" style={{width: '130px', position: 'relative', zIndex: '2'}} />
            </div>}
            {/* Contenido de la App */}
            <div style={{ position: 'relative', zIndex: '1' }} className="bg-one">
                {children}
            </div>
            <style jsx>{`
            `}</style>
        </div>
    )
}

export default Menu