import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import { BsWhatsapp } from 'react-icons/bs'
import Posts from "./posts";

const Profile = ({ usuario, isUserLogin, publicaciones, imagenes }) => {
  const profile = {
    position: "absolute",
    top: "20vh",
    marginLeft: "2%",
    borderRadius: "50%",
  };

  return (
    <div className="text-white">
      <div style={{ height: "20vh" }}>
        <img
          src={`/img${usuario.Id}.png`}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
          alt="foto-portada"
        />
        <div style={profile}>
          <img
            src={`/profile${usuario.Id}.jpg`}
            className="rounded-circle"
            width="80"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div style={{ marginTop: "12%", marginLeft: "2%" }}>
          <p className="my-0 fw-light" style={{fontSize: '12px'}}>{usuario.Nombre}</p>
          <p className="my-0 py-0 fw-light " style={{fontSize: '10px'}}>{usuario.Direccion}</p>
          <p className="my-0 py-0 fw-light" style={{fontSize: '10px'}}>Amante de los animales</p>
        </div>
        <div className="m-2">
          {isUserLogin ? (
            <Button
              size="sm"
              variant="warning"
              onClick={() => alert("Abre modal para editar datos basicos...")}
            >
              Configurar Perfil
            </Button>
          ) : (
            <Link href='/whatsapp'>
              <a>
                <Button
                  size="sm"
                  variant="warning"
                >
                  Contactar <BsWhatsapp />
                </Button>
              </a>
            </Link>
          )}
        </div>
      </div>
      <div className=" text-center">
        <h5 className="border-bottom">
          {isUserLogin ? "Mis publicaciones" : "Publicaciones"}
        </h5>
        <div className="overflow-auto">
          {publicaciones.length === 0 ? (
            "Aún no existen publicaciones"
          ) : (
            <div style={{ height: "27rem" }}>
              <Posts archivos={publicaciones} imagenes={imagenes} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
