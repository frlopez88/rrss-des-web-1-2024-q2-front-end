import React, { useState } from 'react'
import { FormHook } from '../Hooks/FormHook'

export const FormCreacionUsuarios = () => {

    const { changeHandler, submitHandler, dataForm } = FormHook("http://localhost:3000/api/usuario")

    const [validaciones, setValidaciones] = useState([]);
    const [valudacionCorreo, setValidacionCorreo] = useState("");

    const validarFormulario = () => {

        event.preventDefault();

        console.log(dataForm);

        const { correo } = dataForm;
        let arr = [];

        if (correo.includes('@unitec.edu')) {

            setValidacionCorreo("Dominio @unitec.edu no permitido");
            arr.push("Dominio @unitec.edu no permitido")
            setValidaciones(arr);
        } else {
            submitHandler();
        }



    }


    return (
        <>
            <div className='container' >
                <h1 className='mt-5'>Creación de Usuarios</h1>

                <form onSubmit={validarFormulario} >
                    <div className='mb-3'>
                        <label className="form-label">Nombre Usuario</label>
                        <input name="nombre_usuario" type='text' className="form-control" onChange={changeHandler} />
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
                        <input name="correo" type='email' className="form-control" onChange={changeHandler} />
                        <label>{valudacionCorreo}</label>
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Contraseña</label>
                        <input name="contrasena"
                            type='password' className="form-control" onChange={changeHandler} required />
                    </div>

                    <button className='btn btn-primary w-100' >Enviar Datos</button>

                </form>
            </div>

            <div>
                <ul>
                    {
                        validaciones.map((item, x) => (
                            <li key={x} >{item}</li>
                        ))

                    }
                </ul>
            </div>
        </>
    )
}
