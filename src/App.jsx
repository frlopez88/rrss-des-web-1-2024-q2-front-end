import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { InicioSesion } from './ComponentScreen/InicioSesion'
import { FormCreacionUsuarios } from './ComponentScreen/FormCreacionUsuarios'
import { ErrorScreen } from './ComponentScreen/ErrorScreen'
import { PostForm } from './ComponentScreen/PostForm'
import { Muro } from './ComponentScreen/Muro'

export const App = () => {

  const [logInfo, setlogInfo] = useState(window.localStorage.getItem('xinfodatax'));

  const [isLog, setIsLog] = useState(logInfo ? true : false);

  const cerrarSesion = () => {
    try {
      window.localStorage.removeItem('xinfodatax');
      setIsLog(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  const crearPost = ()=>{
    location.href = '/crearPost'
  }

  return (



    <BrowserRouter>

      {isLog ?
        <>
          <button className='btn btn-primary mb-2 w-50' onClick={cerrarSesion} >Cerrar Sesion</button>
          <button className='btn btn-primary mb-2 w-50' onClick={crearPost} >  Crear Post</button>
        </>
        : null}

      <Routes>
        {isLog ? <Route path='/' element={<Muro />} /> : <Route path='/' element={<InicioSesion />} />}
        <Route path='/crearUsuario' element={<FormCreacionUsuarios />} />
        {isLog ? <Route path='/crearPost' element={<PostForm />} /> : null}
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>


  )
}
