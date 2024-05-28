import React, { useState } from 'react'
import axios from 'axios'

export const FormHook = (endPoint) => {
    const [dataForm, setDataForm] = useState({

    })

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value })
    }

    const submitHandler = async (event) => {

        event.preventDefault();
        try {
            const result = await axios.post(endPoint, dataForm);
            const data = (await result).data;
            console.log(data);
        } catch (error) {

            if (axios.isAxiosError(error)){

                const { response } = error;
                const { data } = response;
                console.log(data);

            }else{
                console.log("Error desconocido")
            }
            
        }

    }

    return {
        //propiedades

        //metodos
        changeHandler,
        submitHandler
    }
}
