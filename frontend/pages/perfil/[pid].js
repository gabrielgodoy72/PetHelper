import Celular from "../../components/celular";
import Head from "next/head";
import Menu from "../../components/menu";
import Profile from "../../components/Profile";
import { useRouter } from "next/router";
import { getAll, getById } from "../../api/crud";
import { useEffect, useState } from "react";

const Perfil = () => {
  const router = useRouter();
  const id = Number(router.query.pid);

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

  const {
    data: usuario,
    loading: loadingU,
    error: errorU,
    statusCode: statusCodeU,
    fetch
  } = getAll(`/api/usuarios/${id}`);

  const [listArchivos, setListArchivos] = useState([]);
  const [listImagenes, setListImagenes] = useState([]);

  useEffect(() => {
    if (usuario && archivos.length && imagenes.length) {
      setListArchivos(
        archivos
          .reverse()
          .filter((publicacion) => publicacion.Usuario.Id === id)
      );
      setListImagenes(imagenes);
    }
  }, [archivos, imagenes]);

  useEffect(() => {
    fetch()
  }, [id])

  /*
    Aqui se deberia llamar a api/usuarios/id
    y pasarlo al <Profile />
    */
  return (
    <div>
      <Head>
        <title>Ver Perfil</title>
      </Head>
      <Celular>
        <div className="font-montserrat">
          <Menu title={"Ver Perfil"}>
          {usuario ? (
              <Profile usuario={usuario} isUserLogin={false} publicaciones={listArchivos} imagenes={listImagenes} />
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
