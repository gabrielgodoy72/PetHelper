import Celular from "../../components/celular";
import Head from "next/head";
import Menu from "../../components/menu";
import useApplicationContext from "../../hooks/useApplicationContext";
import Profile from "../../components/Profile";
import { getAll } from "../../api/crud";
import { useEffect, useState } from "react";

const Perfil = () => {
  const { user } = useApplicationContext();

  const {
    data: archivos,
    loading: loadingA,
    error: errorA,
    statusCode: statusCodeA,
  } = getAll("/api/archivos");

  const {
    data: imagenes,
    loading: loadingI,
    error: errorI,
    statusCode: statusCodeI,
  } = getAll("/api/imagenes/archivo");

  const [listArchivos, setListArchivos] = useState([]);
  const [listImagenes, setListImagenes] = useState([]);

  useEffect(() => {
    if (archivos.length && imagenes.length) {
      setListArchivos(archivos.reverse());
      setListImagenes(imagenes);
    }
  }, [archivos, imagenes]);

  return (
    <div>
      <Head>
        <title>Mi Perfil</title>
      </Head>
      <Celular>
        <div className="font-montserrat">
          <Menu title={"Mi Perfil"}>
            {user ? (
              <Profile usuario={user.Usuario} isUserLogin={true} publicaciones={listArchivos.filter(publicacion => publicacion.Usuario.Id === user.Usuario.Id)} imagenes={listImagenes} />
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
