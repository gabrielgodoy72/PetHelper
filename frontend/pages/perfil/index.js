import Celular from "../../components/celular"
import Head from "next/head"
import Menu from "../../components/menu"
import useApplicationContext from "../../hooks/useApplicationContext"

const Perfil = () => {

    const { user } = useApplicationContext()

    return (
        <div>
            <Head>
                <title>Mi Perfil</title>
            </Head>
            <Celular> 
                <div className="font-montserrat">
                    <Menu title={'Mi Perfil'}>
                        <h1>Mi Perfil</h1>
                        <h6>Pagina que muestra el perfil del usuario que inició sesión</h6>
                        <p>
                            {
                                user !== null ? user.Usuario.Id + " - " + user.Usuario.Email : "Loading user..."
                            }
                        </p>
                    </Menu>
                </div>
            </Celular>
        </div>
    )

}

export default Perfil