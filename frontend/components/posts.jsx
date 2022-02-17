import Post from "./post";

const Posts = ({archivos, imagenes}) => {
    return (
        <div className="d-flex flex-wrap px-2 pt-2">
            { Array.isArray(archivos) && Array.isArray(imagenes) &&
                archivos.map( archivo => 
                    (<Post key={archivo.Id} archivo={archivo} imagen={imagenes.filter(img => img.FichaId === archivo.Id)}/>)) 
            }
        </div>
    )
}

export default Posts;