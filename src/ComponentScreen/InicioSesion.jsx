import React from 'react'
import { InicioSesioFormularioHook } from '../Hooks/InicioSesioFormularioHook';


export const InicioSesion = () => {

    

    const { dataForm, changeHandler, submitHandler } = InicioSesioFormularioHook();
    

    return (
        <>
            <div className='container' id='main' >
                <h1 className='mb-5' >Inicio Sesion</h1>
                <form onSubmit={submitHandler} >
                    <div className='mb-3'>
                        <label className="form-label">Correo Electrónico</label>
                        <input  onChange={changeHandler} name="nombre_usuario" type='text' className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Contraseña</label>
                        <input onChange={changeHandler} name="contrasena" type='password' className="form-control" />
                    </div>
                    <button type='submit'  className='btn btn-primary w-100 mb-3' >Iniciar Sesion</button>
                    <button className='btn btn-primary w-100 mb-3' >Registro</button>
                </form>
            </div>
        </>
    )
}