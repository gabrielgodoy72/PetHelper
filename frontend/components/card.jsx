const Card = ({archivo, imagen}) => {
    return (
        <div className="card flex-grow-1 mx-2 my-2 border border-dark" style={{width: '8rem'}}>
            <img src={`/${imagen[0].Nombre}.png`} className="card-img-top" alt={`/${imagen[0].Nombre}.png`} />
            <div className={`card-body ${(archivo.Estado.Nombre === 'Para Adoptar')? 'bg-two' : 'bg-three'}`}>
                <p className="card-text text-white">{archivo.Raza.Especie.Nombre}</p>
            </div>
        </div>
    )
}

export default Card;