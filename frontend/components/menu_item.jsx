import Link from 'next/link'

const MenuItem = ({imagen, texto, href}) => {
    return (
        <Link href={href}>
            <a className='d-flex py-2 pointer text-decoration-none'>
                <img width="25px" height="25px" src={`/${imagen}.svg`} alt="menu icon" />
                <p className="text-white mx-1 my-0 align-self-center" style={{fontSize: '14px'}}>{texto}</p>
            </a>
        </Link>
    )
}

export default MenuItem