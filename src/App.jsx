import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { InicioSesion } from './ComponentScreen/InicioSesion'
import { FormCreacionUsuarios } from './ComponentScreen/FormCreacionUsuarios'
import { ErrorScreen } from './ComponentScreen/ErrorScreen'


export const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <InicioSesion/> } />
        <Route path='/crearUsuario' element={ <FormCreacionUsuarios/> } />
        <Route path='*' element={ <ErrorScreen/> } />
      </Routes>
    </BrowserRouter>


  )
}
