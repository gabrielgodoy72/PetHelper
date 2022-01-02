import Card from "./card";

const Cards = ({archivos}) => {
    return (
        <div className="d-flex flex-wrap justify-content-around bg-one">
            { Array.isArray(archivos) && archivos.map( archivo => (<Card key={archivo.Id} archivo={archivo}/>) ) }
        </div>
    )
}

export default Cards;