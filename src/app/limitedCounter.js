import { useState } from "react";

export default function LimitedCounter() {
    const [limit,setLimit] = useState(0)
    const [clicks,setClicks] = useState(0)

    function onChange(e) {
        setLimit(e.target.value)
    }

    function onClick() {
        clicks < limit ? setClicks(clicks + 1) : alert("Limite alcanzado")
    }

    function reset() {
        setClicks(0)
    }

    return(
        <div>
            <Limit onChange={onChange}/>
            <p>{clicks}</p>
            <button onClick={onClick}>Incrementar</button>
            <button onClick={reset}>Reiniciar</button>
        </div>
    )

}

function Limit({onChange}) {
    return(
        <>
            <label>Límite: </label>
            <input type="number" onChange={onChange} placeholder="Numbero"></input>
        </>
    )
}