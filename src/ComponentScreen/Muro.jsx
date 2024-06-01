import React, { useEffect } from 'react'
import { MuroHook } from '../Hooks/MuroHook'


export const Muro = () => {

    const { publicaciones, getPublicaciones } = MuroHook();

    useEffect(() => {
        getPublicaciones();
    }, []);

    return (
        <>
            <div className='container' >
                {
                    publicaciones.map((item) => (

                        <div key={item.id_publicacion} className="card mb-5 mt-5">
                            <div className="card-header">
                                {item.nombre_usuario}
                            </div>
                            <img src={`data:image/png;base64,${item.foto}`} className="card-img-top" 
                            width={300} height={300} 
                            />
                            <div className="card-body">
                                <p className="card-text">{item.descripcion}</p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </>
    )
}
