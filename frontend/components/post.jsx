import Link from "next/link"
import { GoKebabVertical } from 'react-icons/go'

const Post = ({archivo, imagen}) => {

    const bg = (archivo.Estado.Nombre === 'Para Adoptar')? 'bg-two' : 'bg-three'
    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
    const formatDate = fecha => {
        return `Publicado el ${fecha.getDate()} de ${meses[fecha.getMonth()]}. `
    }

    return (
        <Link href={(archivo.Estado.Nombre === 'Para Adoptar')? `/home/${archivo.Id}` : `/home`}>
            <div className="card flex-grow-1 mx-2 my-1 border border-dark pointer" style={{width: '90%'}}>
                <div className={`card-body d-flex justify-content-between p-0 ${bg}`}>
                    <div className="ms-1">
                        <p className="card-text text-white m-0" style={{fontSize: '12px'}}>
                            {`${archivo.Raza.Especie.Nombre} - ${archivo.Raza.Nombre} - ${archivo.Sexo.Nombre}`}
                        </p>
                        <p className="card-text text-white m-0" style={{fontSize: '12px'}}>
                            {formatDate(new Date(archivo.FechaPublicacion))}
                        </p>
                    </div>
                    <div style={{marginRight: '2px'}}>
                        <img width="40px" height="40px" alt="menu icon"
                            src={(archivo.Estado.Nombre === 'Reportado')? `/reportado.svg` : `/para_adoptar.svg`} />
                            <GoKebabVertical />
                    </div>
                </div>
                <div className="d-flex justify-content-end align-items-end">
                    <img src={`/${imagen[0].Nombre}.png`} className="card-img-top" alt={`/${imagen[0].Nombre}.png`} />
                </div>
            </div>
        </Link>
    )
}

export default Post;