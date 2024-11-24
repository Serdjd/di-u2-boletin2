import { useState } from "react"

export default function AverageCalculator() {
    const [num,setNum] = useState(0)
    const [calificaciones,setCalificaciones] = useState([])
    const [average,setAverage] = useState(0)
    var id = -1;
    function handleChange(e) {
        setNum(+e.target.value)
    }

    function handleClick() {
        setCalificaciones([
            ...calificaciones,
            num
        ])
        let media = num
        calificaciones.forEach(i => media += i)
        setAverage(media/(calificaciones.length+1))
    }
    return(
        <>
            <input type="number" onChange={handleChange}></input>
            <button onClick={handleClick}>Añadir</button>
            <p>
                Media: {average}
            </p>
            {
                calificaciones.map(
                    calificacion => <p key={id+=1}>{calificacion}</p>
                )
            }
        </>
    )
}