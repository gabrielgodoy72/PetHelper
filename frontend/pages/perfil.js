import Celular from "../components/celular"
import Head from "next/head"
import Menu from "../components/menu"

const Perfil = () => {

    return (
        <div>
            <Head>
                <title>Mi Perfil</title>
            </Head>
            <Celular> 
                <div className="font-montserrat">
                    <Menu title={'Mi Perfil'}>
                        <h1 className="text-white">Mi Perfil</h1>
                    </Menu>
                </div>
            </Celular>
        </div>
    )

}

export default Perfil