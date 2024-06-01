import React from 'react'
import { FormHook } from '../Hooks/FormHook'

export const PostForm = () => {

    const { changeHandler,
        submitHandlerImg,
        changeHandlerImg
    } = FormHook("http://localhost:3000/api/publicacion")

    return (
        <div className='container' >
            <h1 className='mt-5'>Creación de Usuarios</h1>

            <form onSubmit={submitHandlerImg} >
                <div className='mb-3'>
                    <label className="form-label">Nombre Usuario</label>
                    <input name="nombre_usuario" type='text' className="form-control" onChange={changeHandler} />
                </div>

                <div className='mb-3'>
                    <label className="form-label">Descripcion</label>
                    <input name="descripcion" type='text' className="form-control" onChange={changeHandler} />
                </div>

                <div className='mb-3'>
                    <label className="form-label">Imagen</label>
                    <input name="imagen" type='file' className="form-control" onChange={changeHandlerImg} />
                </div>

                <button className='btn btn-primary w-100' >Enviar Datos</button>

            </form>
        </div>
    )
}
