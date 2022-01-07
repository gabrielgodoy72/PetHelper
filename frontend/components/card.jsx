import Link from "next/link"

const Card = ({archivo, imagen}) => {

    const bg = (archivo.Estado.Nombre === 'Para Adoptar')? 'bg-two' : 'bg-three'
    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
    const formatDate = fecha => {
        return `Publicado el ${fecha.getDate()} de ${meses[fecha.getMonth()]}. `
    }

    return (
        <Link href={`/home/${archivo.Id}`}>
            <div className="card flex-grow-1 mx-2 my-2 border border-dark pointer" style={{width: '8rem'}}>
                <div className="d-flex justify-content-end align-items-end">
                    <img src={`/${imagen[0].Nombre}.png`} className="card-img-top" alt={`/${imagen[0].Nombre}.png`} />
                    <div className={`etiqueta p-0 ${bg}`} style={{position: 'absolute', zIndex: '1'}}>
                        <p className="m-0 text-white ps-2 py-0" style={{fontSize: '9px'}}>
                            {formatDate(new Date(archivo.FechaPublicacion))}
                        </p>
                    </div>
                </div>
                <div className={`card-body d-flex justify-content-between p-0 ${bg} `}>
                    <div className="ms-1">
                        <p className="card-text text-white m-0" style={{fontSize: '15px'}}>{archivo.Raza.Especie.Nombre}</p>
                        <p className="card-text text-white m-0" style={{fontSize: '10px'}}>
                            {`${archivo.Raza.Nombre} - ${archivo.Sexo.Nombre}`}
                        </p>
                    </div>
                    <div style={{marginRight: '5px'}}>
                        <img width="45px" height="45px" alt="menu icon" 
                            src={(archivo.Estado.Nombre === 'Reportado')? `/reportado.svg` : `/para_adoptar.svg`} />
                    </div>
                </div>
            </div>    
        </Link>
    )
}

export default Card;