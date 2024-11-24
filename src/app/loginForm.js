import { useState } from "react";
import { counts } from "./data";

export default function LoginForm() {
    const [credenciales,setCredenciales] =
    useState(
        {
            user: "",
            password: ""
        }
    )

    function check(formData) {
        let account = counts.find(account => (account.user === formData.get("user")) && (account.password === formData.get("password")))
        if(account == undefined) alert("Credenciales incorrectos")
        else alert("Credenciales correctos")
    }

    function handleChange(e) {
        setCredenciales(
            {
                ...credenciales,
                [e.target.name]: e.target.value
            }
        )
    }

    return (
        <form action={check}>
            <label>Usuario: </label>
            <input type="text" onChange={handleChange} name="user"></input>
            <br/>
            <label>Contraseña: </label>
            <input type="text" onChange={handleChange} name="password"></input>
            <br/>
            <button type="submit">Iniciar Sesion</button>
        </form>

    )
}