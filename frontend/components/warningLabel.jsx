const WarningLabel = ({enable, fontSize, text, end}) => {
    const estilos = end? 'text-danger text-end' : 'text-danger mx-2'
    return (
        enable && <span className={estilos} style={{fontSize:fontSize}}>{text}</span>
    )
}

export default WarningLabel