import React, { useState } from 'react'
import axios from 'axios'

export const FormHook = (endPoint) => {
    const [dataForm, setDataForm] = useState({

    })

    const [token, setToken] = useState(window.localStorage.getItem('xinfodatax'));

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value })
    }

    const changeHandlerImg = (event) =>{

        const imagen = event.target.files[0];
        setDataForm({ ...dataForm, ["imagen"]: imagen })

    }

    const submitHandler = async (event) => {

        event.preventDefault();
        try {
            const result = await axios.post(endPoint, dataForm, {
                headers : {
                    'Authorization' : `Bear ${token}`
                }
            });
            const data = (await result).data;
            console.log(data);
        } catch (error) {

            if (axios.isAxiosError(error)) {

                const { response } = error;
                const { data } = response;
                console.log(data);

            } else {
                console.log("Error desconocido")
            }

        }

    }

    const submitHandlerImg = async (event) => {

        event.preventDefault();
        const datosEnviar = new FormData();
        const keys = Object.keys(dataForm);

        keys.map(item => {

            datosEnviar.append(item, dataForm[item])

        });

        try {
            const result = await axios.post(endPoint, datosEnviar, {
                headers: {
                    'Authorization' : `Bear ${token}`
                }
            });
            const data = (await result).data;
            console.log(data);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                const { response } = error;
                const { data } = response;
                console.log(data);

            } else {
                console.log("Error desconocido")
            }
        }








    }

    return {
        //propiedades
        dataForm,
        //metodos
        changeHandler,
        submitHandler, 
        submitHandlerImg, 
        changeHandlerImg
    }
}
