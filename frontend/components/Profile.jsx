import { Button, Container } from "react-bootstrap";
import Cards from "./cards";

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
          src={`img${usuario.Id}.png`}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
          alt="foto-portada"
        />
        <div style={profile}>
          <img
            src={`profile${usuario.Id}.jpg`}
            class="rounded-circle"
            width="100"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div style={{ marginTop: "15%", marginLeft: "2%" }}>
          <h5>{usuario.Nombre}</h5>
          <h6>{usuario.Direccion}</h6>
          <p>Amante de los animales</p>
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
            <Button
              size="sm"
              variant="warning"
              onClick={() => alert("Abre whatsapp...")}
            >
              Contactar
            </Button>
          )}
        </div>
      </div>
      <Container className="mt-2 text-center">
        <h4 className="border-bottom">
          {isUserLogin ? "Mis publicaciones" : "Publicaciones"}
        </h4>
        <div>
          {publicaciones.length === 0 ? (
            "Aún no existen publicaciones"
          ) : (
            <div className="overflow-auto border" style={{ height: "45rem" }}>
              <Cards archivos={publicaciones} imagenes={imagenes} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Profile;
