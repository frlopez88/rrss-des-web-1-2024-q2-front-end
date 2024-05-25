import React, { useState } from 'react'
import axios from 'axios'


const urlInicioSesion = "http://localhost:3000/api/usuario/auth";

export const InicioSesionHook = () => {

    const [inicioSesion, setInicioSesion] = useState(false);

    const [dataUser, setDataUser] = useState({
        nombre_usuario: "",
        nombre: "",
        correo: ""
    });

    const iniciarSesion = async (nombre_usuario, contrasena) => {

        const dataIniciSesion = {
            nombre_usuario,
            contrasena
        };

        try {
            const result = axios.post(urlInicioSesion, dataIniciSesion);
            const dataResult = (await result).data;
            setInicioSesion(true);
            const { info_user } = dataResult;
            setDataUser(...info_user[0]);
            console.log("Inicio de Sesion Exitoso")
        } catch (err) {
            console.log("usuario invalido");
            console.log(err);
        }




    }

    return {
        //propiedades
        inicioSesion,
        //metodos
        iniciarSesion
    }
}
