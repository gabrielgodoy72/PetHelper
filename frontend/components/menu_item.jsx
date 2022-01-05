const MenuItem = ({imagen, texto}) => {
    return (
        <div className="d-flex py-2">
            <img width="25px" src={`/${imagen}.svg`} alt="menu icon" />
            <p className="text-white mx-1 my-0 align-self-center" style={{fontSize: '14px'}}>{texto}</p>
        </div>
    )
}

export default MenuItem