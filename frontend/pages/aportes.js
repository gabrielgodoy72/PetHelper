import Celular from "../components/celular"
import Head from "next/head"
import Menu from "../components/menu"

const Aportes = () => {

    return (
        <div>
            <Head>
                <title>Aportes y Ayudas</title>
            </Head>
            <Celular> 
                <div className="font-montserrat">
                    <Menu title={'Aportes'}>
                        <h1 className="text-white">Aportes y Ayudas</h1>
                    </Menu>
                </div>
            </Celular>
        </div>
    )

}

export default Aportes