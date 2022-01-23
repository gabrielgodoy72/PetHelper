import Celular from "../../../components/celular";
import Head from "next/head";
import Menu from "../../../components/menu";
import Profile from "../../../components/Profile";
import { useRouter } from "next/router";

const Perfil = () => {
  const router = useRouter();
  const id = parseInt(router.query.pid);
  /*
    Aqui se deberia llamar a api/usuarios/id
    y pasarlo al <Profile />
    */
  return (
    <div>
      <Head>
        <title>Perfil</title>
      </Head>
      <Celular>
        <div className="font-montserrat">
          <Menu title={"Perfiles"}>
            {/*
                 <Profile usuario={usuario.Usuario} isUserLogin={false} />
                 */}
          </Menu>
        </div>
      </Celular>
    </div>
  );
};

export default Perfil;
