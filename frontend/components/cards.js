import Card from "./card";

const Cards = ({archivos, imagenes}) => {
    return (
        <div className="d-flex flex-wrap bg-one px-2">
            { Array.isArray(archivos) && Array.isArray(imagenes) &&
                archivos.map( archivo => 
                    (<Card key={archivo.Id} archivo={archivo} imagen={imagenes.filter(img => img.FichaId === archivo.Id)}/>)) 
            }
        </div>
    )
}

export default Cards;