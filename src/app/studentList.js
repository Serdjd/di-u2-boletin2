import { useState } from "react"
import { estudiantes } from "./data"
import { useImmer } from "use-immer"
export default function StudentList() {
    
    const [students,updatetudents] = useImmer(estudiantes)
    
    return(
        <div>
            <Adder estudiantes={students} updateEstudiantes={updatetudents}/>
            {
                students.map( 
                    student => (
                        <Student student={student} remove={() =>  remove(student.id,updatetudents)} key={student.id}/>
                    )
                )
            }
        </div>
    )
}

function Student({student,remove}) {

    return (
        <>
            <br/>
            <label>{student.name}</label>
            <button onClick={remove}>Delete</button>
        </>
    )
}

function Adder({estudiantes,updateEstudiantes}) {
    const [text,setText] = useState("")
    function handleChange(e) {
        setText(e.target.value)
    }

    function add() {
        const nextId = estudiantes.length
        updateEstudiantes(
            draft => {
                draft.push({id: nextId, name: text})
            }
        )
    }

    return(
        <>
            <label>Nombre alumno: </label>
            <input type="text" placeholder="Nombre" onChange={handleChange}></input>
            <button onClick={add}>Add</button>
        </>
    )
}

function remove(id,updateEstudiantes) {
    updateEstudiantes(
        draft => {
            const index = draft.findIndex(student => student.id === id)
            draft.splice(index,1)
        }
    )
}