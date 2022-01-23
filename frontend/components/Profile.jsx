import { Button, Container } from "react-bootstrap";

const Profile = ({ usuario, isUserLogin }) => {
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
          <Button
            size="sm"
            variant="warning"
            onClick={() => alert("Abre modal para editar datos basicos...")}
          >
            Configurar Perfil
          </Button>
        </div>
      </div>
      <Container className="mt-2 text-center">
        <h4 className="border-bottom">
          {isUserLogin ? "Mis publicaciones" : "Publicaciones"}
        </h4>
        <div>
          <h6>Aqui traer las publicaciones del usuario por medio de la api</h6>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
