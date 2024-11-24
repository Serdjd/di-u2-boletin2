import { useState } from "react";

export default function TextCarousel({frases}) {
    const [index,setIndex] = useState(0)

    function next() {
        setIndex(index < frases.length - 1 ? index + 1 : 0)
    }

    function previous() {
        setIndex(index > 0 ? index - 1 : frases.length - 1)
    }

    return(
        <>
            <p>{frases[index]}</p>
            <button onClick={next}>Siguiente</button>
            <button onClick={previous}>Anterior</button>
        </>
    )
}