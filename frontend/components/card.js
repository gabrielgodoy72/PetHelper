const Card = ({archivo}) => {
    return (
        <div className="card" style={{width: '10rem'}}>
            <img src="/perro.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{archivo.Raza.Especie.Nombre}</p>
            </div>
        </div>
    )
}

export default Card;