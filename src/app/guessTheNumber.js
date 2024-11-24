import { useState } from "react";

export default function GuessTheNumber() {
    const [num,setNum] = useState(Math.floor(Math.random() * 100 + 1))
    const [intentos,setIntentos] = useState(0)
    const [intento,setIntento] = useState()
    const [result, setResult] = useState('Prueba suerte')
    function check() {
        console.log(num)
        if(num < intento) setResult('Te has pasado')
        else if (num > intento) setResult('Te has quedado corto')
        else setResult('Has acertado')
        setIntentos(intentos + 1)
    }

    function reset() {
        setIntentos(0)
        setNum(Math.floor(Math.random * 100 + 1))
        setResult('Prueba suerte')
    }
    

    function handleChange(e) {
        setIntento(+e.target.value)
    }

    return(
        <>
            <input type="number" min={1} max={100} onChange={handleChange}></input>
            <button onClick={check}>Comprobar</button>
            <button onClick={reset}>Reset</button>
            <p>Numero de intentos: {intentos}</p>
            <p>{result}</p>
        </>
    )
}