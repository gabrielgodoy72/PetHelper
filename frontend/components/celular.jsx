import { Container } from "react-bootstrap";
const Celular = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="phone overflow-hidden bg-one"
        style={{position: 'absolute', zIndex: '10'}}
      >
        {props.children}
      </div>
      <style jsx>{`
        .phone {
          width: 360px;
          height: 720px;
          border-radius: 20px;
          border: 1px solid black;
        }
      `}</style>
    </div>
  );
};

export default Celular;
