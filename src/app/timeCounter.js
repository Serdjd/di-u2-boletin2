import { useEffect, useState } from "react"

export default function TimeCounter() {
    const [time,setTime] = useState(0)
    const [state,setState] = useState(false)
    
    useEffect( () => {
        if(!state) return;
        const interval = setInterval(() => {
            setTime(n => n + 1)
        },1000)

        return () => clearInterval(interval)
    },[state])
    
    function resume() {
        setState(true)
    }

    function pause() {
        setState(false)
    }

    function reset() {
        setTime(0)
    }

    return( 
        <>
            <p>
                {
                    time < 60 
                    ? '0:'+ (time < 10 ? '0'+time : time)
                    :   (
                            Math.floor(time/60) < 10
                            ? '0'+Math.floor(time/60)
                            : Math.floor(time/60)
                        )
                        +':'+
                        (
                            time-(Math.floor((time/60))*60) > 10
                            ? time-(Math.floor((time/60))*60)
                            : '0'+time-(Math.floor((time/60))*60)
                        )
                }
            </p>
            <button onClick={resume}>Iniciar</button>
            <button onClick={pause}>Pausar</button>
            <button onClick={reset}>Reiniciar</button>
        </>
    )
}