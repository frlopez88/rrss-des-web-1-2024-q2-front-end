import React from 'react'
import { FormHook } from '../Hooks/FormHook'

export const FormCreacionUsuarios = () => {

    const { changeHandler, submitHandler } = FormHook("http://localhost:3000/api/usuario")

    return (
        <>
            <div className='container' >
                <h1 className='mt-5'>Creación de Usuarios</h1>

                <form onSubmit={submitHandler} >
                    <div className='mb-3'>
                        <label className="form-label">Nombre Usuario</label>
                        <input name="nombre_usuario" type='text' className="form-control" onChange={changeHandler}   />
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Nombre</label>
                        <input name="nombre" type='text' className="form-control" onChange={changeHandler} />
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Apellido</label>
                        <input name="apellido" type='text' className="form-control" onChange={changeHandler} />
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Correo</label>
                        <input name="correo" type='email' className="form-control"  onChange={changeHandler} />
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Contraseña</label>
                        <input name="contrasena" type='password' className="form-control" onChange={changeHandler} />
                    </div>

                    <button className='btn btn-primary w-100' >Enviar Datos</button>

                </form>
            </div>

        </>
    )
}
