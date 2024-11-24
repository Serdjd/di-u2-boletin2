import { useState } from "react";
import { useImmer } from "use-immer";

export default function UserTable() {
    const [users,upadteUsers] = useImmer([])
    const [num,setNum] = useState()
    let index = 0
    function Adder() {
        function add(formData) {
            upadteUsers( draft => {
                draft.push(
                    {
                        name: formData.get("nombre"),
                        email: formData.get("email"),
                        edad: formData.get("edad")
                    }
                )
            })
        }
        return (
            <form action={add}>
                <label>Nombre: </label>
                <input type="text" name="nombre"></input>
                <br/>
                <label>Email: </label>
                <input type="email" name="email"></input>
                <br/>
                <label>Edad: </label>
                <input type="number" name="edad"></input>
                <br/>
                <button type="submit">Enviar</button>
            </form>
        )
    }
    function remove() {
        upadteUsers( draft => { draft.splice(num-1,1) } )
    }

    function handleChange(e) {
        setNum(+e.target.value)
    }

    return (
        <>
            <Adder/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => 
                            <tr key={index++}>
                                <th>{user.name}</th>
                                <td>{user.edad}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }
                </tbody>
                
            </table>
            <input placeholder="Número de fila" onChange={handleChange}></input>
            <button onClick={remove}>Borrar</button>
        </>
    )
}