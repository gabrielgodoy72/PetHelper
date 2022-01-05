const Card = ({archivo, imagen}) => {
    {console.log(archivo.Estado.Nombre)}
    return (
        <div className="card" style={{width: '10rem'}}>
            <img src={`/${imagen[0].Nombre}.png`} className="card-img-top" alt={`/${imagen[0].Nombre}.png`} />
            <div className={`card-body ${(archivo.Estado.Nombre === 'Para Adoptar')? 'bg-two' : 'bg-three'}`}>
                <p className="card-text">{archivo.Raza.Especie.Nombre}</p>
            </div>
        </div>
    )
}

export default Card;