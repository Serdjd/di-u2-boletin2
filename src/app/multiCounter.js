import { useState } from "react"

export default function MultiCounter() {
    const [counters,setCounters] = useState([])
    function Adder() {
        const [text,setText] = useState()
        function handleChange(e) {
            setText(e.target.value)
        }

        return (
            <>
                <input placeholder="name" onChange={handleChange}></input>
                <button onClick={() => addCounter(text)}>Add counter</button>
            </>
        )
    }

    function Counter({counter}) {
        return (
            <>
                <p>{counter.text}: {counter.pulsaciones}</p>
                <button onClick={() => incrementar(counter.id)}>Incrementar</button>
                <button onClick={() => decrementar(counter.id)}>Reducir</button>
                <button onClick={() => reset(counter.id)}>Reset</button>
            </>
        )
    }

    function addCounter(text) {
        setCounters([
            ...counters,
            {id: counters.length, text: text, pulsaciones: 0}
        ])
    }

    function incrementar(id) {
        setCounters(
            counters.map(
                counter => {
                    if(counter.id === id) {
                        return {...counter, pulsaciones: counter.pulsaciones + 1}
                    }
                    else {
                        return counter
                    }
                }
            )
        )
    }

    function decrementar(id) {
        setCounters(
            counters.map(
                counter => {
                    if(counter.id === id) {
                        let pulsaciones = counter.pulsaciones === 0 ? 0 : counter.pulsaciones - 1
                        return {...counter, pulsaciones: pulsaciones}
                    }
                    else {
                        return counter
                    }
                }
            )
        )
    }

    function reset(id) {
        setCounters(
            counters.map(
                counter => {
                    if(counter.id === id) {
                        return {...counter, pulsaciones: 0}
                    }
                    else {
                        return counter
                    }
                }
            )
        )
    }

    return (
        <>
            <Adder/>
            {
                counters.map(
                    counter => <Counter counter={counter} key={counter.id}></Counter>
                )
            }
        </>
    )
}
