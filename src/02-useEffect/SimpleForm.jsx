import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const SimpleForm = () => {
    const {formState, onInputChange, onResetForm,username, email, password} = useForm({
        username: "Usuario", email: "Correo", password:"Contraseña"
    })
    return (
        <>
            <h1>Formulario simple</h1>
            <hr></hr>
            <input onChange={onInputChange} type="text" className= "form-control mt-2" placeholder={username} name="username"></input>
            <input onChange={onInputChange} type="email" className="form-control mt-2" placeholder={email} name="email"></input>
            <input onChange={onInputChange} type="password" className="form-control mt-2" placeholder={password} name="password"></input>
            { (username === "strider2") && <Message />}
            <button onClick={onResetForm} className="btn btn-danger mt-2" >Borrar</button>
        </>
    )
}