import Celular from "../../components/celular";
import Head from "next/head";
import Menu from "../../components/menu";
import useApplicationContext from "../../hooks/useApplicationContext";
import Profile from "../../components/Profile";

const Perfil = () => {
  const { user } = useApplicationContext();
  return (
    <div>
      <Head>
        <title>Mi Perfil</title>
      </Head>
      <Celular>
        <div className="font-montserrat">
          <Menu title={"Mi Perfil"}>
            {user ? (
              <Profile usuario={user.Usuario} isUserLogin={true} />
            ) : (
              <div>
                <h3>Cargando perfil...</h3>
              </div>
            )}
          </Menu>
        </div>
      </Celular>
    </div>
  );
};

export default Perfil;
