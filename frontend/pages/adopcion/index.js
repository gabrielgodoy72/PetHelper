import Head from "next/head";
import Menu from "../../components/menu";
import Celular from "../../components/celular";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import Map from "../../components/Map";
const Adopcion = () => {
  const defaultLocation = {
    lat: -27.30663654561394,
    lng: -55.88749467693345,
  }; // UNI

  const [location, setLocation] = useState(defaultLocation);

  const handleAddMarker = ({ lat, lng }) => {
    setLocation({ lat, lng });
    console.log(lat, lng);
  };

  return (
    <div>
      <Head>
        <title>Dar en Adopción</title>
      </Head>
      <Celular>
        <Menu title={"Dar en Adopción"}>
          <Container style={{ color: "white" }}>
            <Form>
              <FormGroup className="mb-2">
                <FormLabel>Nombre</FormLabel>
                <FormControl size="sm" type="text" name="nombre" />
              </FormGroup>
              <FormGroup className="mb-2 d-flex">
                <Col>
                  <FormLabel>Edad</FormLabel>
                  <FormControl size="sm" type="number" name="edad" />
                </Col>
                <Col className="ms-3">
                  <FormLabel>Raza</FormLabel>
                  <FormControl size="sm" type="text" name="raza" />
                </Col>
              </FormGroup>
              <FormGroup className="mb-2 d-flex">
                <Col>
                  <FormLabel>Especie</FormLabel>
                  <FormSelect aria-label="select-especie" name="especie">
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                  </FormSelect>
                </Col>
                <Col className="ms-3">
                  <FormLabel>Sexo</FormLabel>
                  <FormSelect aria-label="select-sexo" name="sexo">
                    <option value="Hembra">Hembra</option>
                    <option value="Macho">Macho</option>
                  </FormSelect>
                </Col>
              </FormGroup>
              <FormGroup className="mb-2">
                <FormLabel>
                  Describa y seleccione su ubicación en el mapa:
                </FormLabel>
                <FormControl
                  size="sm"
                  as="textarea"
                  rows={1}
                  name="ubicacion"
                  placeholder="Avda. XXX esq XXX, Ciudad XXX"
                  className="mb-2"
                />
                <Map
                  location={location}
                  zoomLevel={18}
                  addMarker={handleAddMarker}
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <FormLabel>Requisitos para la adopción:</FormLabel>
                <FormControl
                  size="sm"
                  as="textarea"
                  rows={2}
                  name="requisitos"
                  placeholder="1."
                />
              </FormGroup>
              <FormGroup className="d-flex">
                <Col>
                  <Button size="sm" type="" className="w-100" variant="secondary">
                    Cancelar
                  </Button>
                </Col>
                <Col className="ms-3">
                  <Button size="sm" type="submit" className="w-100" variant="warning">
                    Guardar
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Container>
        </Menu>
      </Celular>
    </div>
  );
};

export default Adopcion;
