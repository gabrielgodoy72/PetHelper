import { useState } from "react"
import MenuItem from "./menu_item"
import { useRouter } from "next/router"
import { Container, Button } from "react-bootstrap"
import ModalReporte from './modal_reporte'

const Menu = ({title, children, onShowAll, showAll}) => {

    const [showMenu, setShowMenu] = useState(false)
    const [showReportModal, setshowReportModal] = useState(false)
    const router = useRouter()
    const goToHome = () => {
        if(showMenu) {
            setShowMenu(!showMenu)
            router.push('./home')
        }
    }

    const handleReportModal = () => {
        setShowMenu(!showMenu)
        setshowReportModal(!showReportModal)
    }

    return (
        <div>
            {/* NavBar Menu*/}
            {!showAll && <div className="d-flex justify-content-between border-bottom border-white px-3 py-2">
            <div className="d-flex align-items-center">
                    <img src="/hamburguer_menu.svg" alt="menu icon" onClick={() => setShowMenu(!showMenu)} className="pointer"/>
                    <h5 className="text-white my-0 mx-2 pointer" onClick={goToHome}>{showMenu? 'Inicio': title}</h5>
                </div>
                <img src="/search_icon.svg" alt="menu icon" />
                </div>}
            {/* NavBar Informacion */}
            {showAll && <div className="d-flex justify-content-start border-bottom border-white px-3 py-2">
            <div className="d-flex align-items-center">
                    <img src="/atras.svg" alt="atras icon" onClick={() => onShowAll()} className="pointer"/>
                    <h5 className="text-white my-0 mx-2 pointer">Información</h5>
                </div>
            </div>}
            {/* Menu que se despliega */}
            {showMenu && <div className="d-flex" style={{height: '750px', position: 'absolute', zIndex: '5'}} >
                <div className="flex-grow-1 bg-one p-2" style={{width: '230px'}}>
                    <MenuItem imagen='home' texto='Inicio' href={'/home'}/>
                    <MenuItem imagen='user' texto='Mi Perfil' href={'/perfil'}/>
                    <div className='d-flex py-2 pointer' onClick={() => handleReportModal()}>
                        <img width="25px" height="25px" src={`/reportado.svg`} alt="report icon" />
                        <p className="text-white mx-1 my-0 align-self-center" style={{fontSize: '14px'}}>Reportar</p>
                    </div>
                    <MenuItem imagen='para_adoptar' texto='Dar en Adopción' href={'/adopcion'}/>
                    <MenuItem imagen='aportes_ayudas' texto='Aportes y Ayudas' href={'/aportes'}/>
                    <MenuItem imagen='cerrar_sesion' texto='Cerrar Sesión' href={'/'}/>
                </div>
                <div className="bg-secondary opacity-50" style={{width: '130px'}} 
                    onClick={() => setShowMenu(!showMenu)}/>
            </div>}
            {/* Contenido de la App, el modal se muestra sobre el contenido actual */}
            {showReportModal && 
                <ModalReporte onClose={() => setshowReportModal(false)}/>
            }
            <div className="bg-one">
                {children}
            </div>
            <style jsx>{`
            `}</style>
        </div>
    )
}

export default Menu