import Celular from "../components/celular"
import Head from "next/head"
import Link from "next/link"
import { useFormik } from 'formik'
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { useState, useEffect } from "react"
import { post } from "../api/crud"
import { useRouter } from "next/router"
import WarningLabel from "../components/warningLabel"

const Index = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [userNotFount, setuserNotFount] = useState(false)
    const [invalidPassword, setinvalidPassword] = useState(false)

    const {data, loading, error, statusCode, fetchData: postUser} = post('/auth/singin')
    
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            const user = { "Email": values.email, "Password": values.password }
            postUser(user)
        }
    })
    
    useEffect(() => {
        if (statusCode === 404) setuserNotFount(true)
        if (statusCode === 400) setinvalidPassword(true)
        if (statusCode === 200) router.push('./home')
    }, [statusCode])

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Celular>
               <form onSubmit={formik.handleSubmit} className="font-roboto">
                    <div className="pt-5" style={{height: '330px'}}>
                        <h1 className="text-center text-white mt-5 pt-5">Iniciar Sesión</h1>
                        <h2 className="text-center text-white pt-3">PetHelper</h2>
                    </div>
                    <div className="row px-4">
                        <div className="form-floating">
                            <input type="email" 
                                   className="form-control" placeholder="-" name="email"
                                   value={formik.values.email}
                                   onChange={formik.handleChange} 
                                   onClick={() => {if(userNotFount) setuserNotFount(false)}}
                                   autoComplete="off"/>
                            <label htmlFor="email">Correo Electrónico</label>
                        </div>
                        <WarningLabel enable={userNotFount} fontSize='12px' text='El usuario no existe' end={true}/>
                        <div className="input-group mt-4">
                            <div className="form-floating flex-grow-1">
                                <input type={showPassword? "text" : "password" }
                                       className="form-control border-end-0" placeholder="-" name="password" 
                                       value={formik.values.password} 
                                       onChange={formik.handleChange} 
                                       onClick={() => {if(invalidPassword) setinvalidPassword(false)}}
                                       autoComplete="off"/>
                                <label htmlFor="password" className="px-0">Contraseña</label>
                            </div>
                            <span className="input-group-text bg-white border-start-0 pointer" onClick={() => { setShowPassword(!showPassword)}}>
                                {showPassword? <BsEyeSlash /> : <BsEye />}
                            </span>
                        </div>
                        <WarningLabel enable={invalidPassword} fontSize='12px' text='La contraseña es incorrecta' end={true}/>
                    </div>
                    <div className="row px-4 mt-4">
                        <div className="d-grid">
                            <button className="btn-bg-five rounded" type="submit" style={{height: '55px'}}>Iniciar Sesión</button>
                        </div>
                    </div>
                    <p className="text-style-one"><strong>No posees una cuenta? </strong> 
                        <Link href="/register">
                            <a className="text-white">Registrate</a>
                        </Link></p>
               </form>
            </Celular>
        </div>
    )

}

export default Index