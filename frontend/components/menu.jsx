import { useState } from "react"
import MenuItem from "./menu_item"
import { useRouter } from "next/router"
import { Container, Button } from "react-bootstrap"
import Modal from './modal'

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
                <Modal>
                    <div className="mi-modal flex-column" 
                         style={{height: '85%', width: '85%'}}>
                        <div className="modal-header">
                            <h5 className="modal-title">Reportar</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => setshowReportModal(false)} />
                        </div>
                        <div>
                            <h1>Hola Mundo</h1>
                        </div>
                        <div className="modal-footer mt-auto p-2">
                            <button className="btn btn-outline-secondary" onClick={() => setshowReportModal(false)}>
                                Cancelar
                            </button>
                            <button className="btn btn-save" onClick={() => setshowReportModal(false)}>
                                Guardar
                            </button>
                        </div>
                    </div>   
                </Modal>
            }
            <div className="bg-one">
                {children}
            </div>
            <style jsx>{`
                .mi-modal {
                    background: white;
                    border: 1px solid gray;
                    border-radius: 5px;
                    display: flex;
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

export default Menu