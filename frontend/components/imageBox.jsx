const ImageBox = ({imagenes, sort, index, remove}) => {

    const img = imagenes[index]

    return (
        <>
            {img && 
                <div style={{position:'absolute', zIndex:'8', width:'100%', top: '-2px', right: '-2px'}}>
                    <img width="20px" 
                        alt="remove icon" 
                        className='float-end pointer'
                        onClick={() => remove(index)}
                        src={`/remove.svg`} />
                </div>
            }
            <img width='100%' 
                height='100%' 
                src={(img)? `/${img}` : '/noImg.png'} 
                alt="img" 
                className="border border-white"
                onClick={() => sort(index)}/>
        </>
    )
}

export default ImageBox