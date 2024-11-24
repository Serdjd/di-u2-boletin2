import { useState } from "react"
import { useImmer } from "use-immer"

export default function LiveValidationForm() {
    const [validate,updateValidate] = useImmer(
        {
            name: false,
            email: false,
            pass: false
        }
    )
    function validateName(e) {
        let name = e.target.value
        let val = true
        if(name.length < 8) val = false

        updateValidate(
            draft => {
                draft.name = val
            }
        )
    }
    function validateEmail(e) {
        let email = e.target.value
        let val = true
        if(email.length < 8) val = false
        else {
            let isGmail = /@gmail.com/
            val = isGmail.test(email)
        }
        updateValidate(
            draft => {
                draft.email = val
            }
        )
    }
    function validatePass(e) {
        let pass = e.target.value
        let val = true
        if(pass.length < 8) val = false
        else {
            let hasNumber = /\d/
            val = (hasNumber.test(pass))
        }
        updateValidate(
            draft => {
                draft.pass = val
            }
        )

    }

    function onSubmit(e) {
        e.preventDefault()
        if(validate.name == true && validate.email == true && validate.pass == true)
        alert('Gracias por su respuesta')
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Nombre: </label>
            <input type="text" onChange={validateName}></input>
            <p>{validate.name ? '✅' : '❌'}</p>
            <label>Email: </label>
            <input type="text" onChange={validateEmail}></input>
            <p>{validate.email ? '✅' : '❌'}</p>
            <label>Contraseña: </label>
            <input type="text" onChange={validatePass}></input>
            <p>{validate.pass ? '✅' : '❌'}</p>
            <button type="submit">Enviar</button>
        </form>
    )
}